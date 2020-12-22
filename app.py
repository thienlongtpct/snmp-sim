from flask import Flask, request, jsonify
from flask_cors import CORS
import json

from SnmpAgent.Device import Device
from SnmpAgent.Switch import Switch
from SnmpAgent.Router import Router
from SnmpAgent.PC import PC
from SnmpManager import SnmpManager
from SnmpAgent.Device import DeviceStatus

app = Flask(__name__)
CORS(app)

manager = SnmpManager()


@app.route('/get_devices', methods=['GET'])
def get_devices():
    response = jsonify(manager.to_dict())
    return response


@app.route('/get_device/<request_id>', methods=['GET'])
def get_device(request_id):
    for device in manager.get_devices():
        if int(request_id) == int(id(device)):
            return device.to_dict()
    return ""


@app.route('/add_device', methods=['POST'])
def add_device():
    data = json.loads(request.get_data())
    agent = Device(data['name'])
    if data['device'] == 'switch':
        agent = Switch(data['name'], data['ports'], data['lan'])
    elif data['device'] == 'router':
        agent = Router(data['name'], data['ports'], data['wan'], data['lan'])
    elif data['device'] == 'pc':
        agent = PC(data['name'], data['os'], data['lan'])

    manager.add_device(agent)
    response = jsonify(agent.to_dict())

    return response


@app.route('/edit_device', methods=['PUT'])
def edit_device():
    data = json.loads(request.get_data())
    request_id = data['id']

    for device in manager.get_devices():
        if int(request_id) == int(id(device)):
            if data['status'] == 'Up':
                device.start()
            else:
                device.shutdown()
            device.set_name(data['name'])
            if hasattr(device, 'lan'):
                device.set_lan(data['lan'])
            if hasattr(device, 'wan'):
                device.set_wan(data['wan'])
            if hasattr(device, 'ports'):
                for port in data['ports']:
                    if port['status'] == 'On':
                        device.start_port(port['index'])
                    else:
                        device.shutdown_port(port['index'])
            return device.to_dict()
    return ""


if __name__ == '__main__':
    app.run()

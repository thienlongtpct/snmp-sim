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
        if int(request_id) == int(device['id']):
            return device
    print('hihi')
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
        if int(request_id) == int(device['id']):
            device['status'] = DeviceStatus[data['status']].name
            device['name'] = data['name']
            if 'lan' in device:
                device['lan'] = data['lan']
            if 'wan' in device:
                device['wan'] = data['wan']
            if 'ports' in device:
                device['ports'] = data['ports']

    return ""


if __name__ == '__main__':
    app.run()

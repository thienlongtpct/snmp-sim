from SnmpAgent.Port import Port, PortStatus
from SnmpAgent.Device import Device, DeviceStatus, DeviceType

from random import seed
from random import randint
from datetime import datetime


class Router(Device):
    def __init__(self, name, ports, wan, lan):
        seed(datetime.now())
        super().__init__(name)
        super().set_device(DeviceType.Router)
        self.ports = [Port(i, randint(0, 1024)) for i in range(1, int(ports)+1)]
        self.wan = wan
        self.lan = lan

    def to_dict(self):
        return {
            "id": id(self),
            "status": self.status.name,
            "name": self.name,
            "device": self.device.name,
            "ports": [port.to_dict() for port in self.ports],
            "wan": self.wan,
            "lan": self.lan
        }

    def start_port(self, port):
        if self.get_status() == DeviceStatus.Up or self.get_status() == DeviceStatus.Warning:
            self.ports[port-1].start()
            if self.has_shutdown_port():
                self.set_status(DeviceStatus.Warning)
            else:
                self.set_status(DeviceStatus.Up)

    def shutdown_port(self, port):
        if self.get_status() == DeviceStatus.Up or self.get_status() == DeviceStatus.Warning:
            self.ports[port-1].shutdown()
            if self.has_shutdown_port():
                self.set_status(DeviceStatus.Warning)
            else:
                self.set_status(DeviceStatus.Up)

    def get_start_ports(self):
        return [port.get_index() for port in filter(lambda port: port.get_status() == PortStatus.On, self.ports)]

    def get_shutdown_ports(self):
        return map(lambda port: port.get_index(), filter(lambda port: port.get_status() == PortStatus.Off, self.ports))

    def has_shutdown_port(self):
        return len(list(filter(lambda port: port.get_status() == PortStatus.Off, self.ports))) > 0

    def start(self):
        for port in self.ports:
            port.start()
        self.set_status(DeviceStatus.Up)

    def shutdown(self):
        for port in self.ports:
            port.shutdown()
        self.set_status(DeviceStatus.Down)

    def get_wan(self):
        return self.wan

    def get_lan(self):
        return self.lan

    def get_ports(self):
        return self.ports

    def set_wan(self, wan):
        self.wan = wan

    def set_lan(self, lan):
        self.lan = lan


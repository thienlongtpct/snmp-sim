from enum import Enum


class DeviceStatus(Enum):
    Down = 0
    Up = 1
    Warning = 2
    Unknown = 3


class DeviceType(Enum):
    Other = 0
    Switch = 1
    Router = 2
    PC = 3


class Device:
    def __init__(self, name):
        self.status = DeviceStatus.Unknown
        self.name = name
        self.device = DeviceType.Other

    def to_dict(self):
        return {
            "id": id(self),
            "status": self.status.name,
            "name": self.name,
            "device": self.device.name
        }

    def get_device(self):
        return self.device

    def get_name(self):
        return self.name

    def get_status(self):
        return self.status

    def set_device(self, device):
        self.device = device

    def set_name(self, name):
        self.name = name

    def set_status(self, status):
        self.status = status

    def start(self):
        self.status = DeviceStatus.Up

    def shutdown(self):
        self.status = DeviceStatus.Down

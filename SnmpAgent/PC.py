from SnmpAgent.Device import Device, DeviceType


class PC(Device):
    def __init__(self, name, os, lan):
        super().__init__(name)
        super().set_device(DeviceType.PC)
        self.os = os
        self.lan = lan

    def to_dict(self):
        return {
            "id": id(self),
            "status": self.status.name,
            "name": self.name,
            "device": self.device.name,
            "os": self.os,
            "lan": self.lan
        }

    def get_os(self):
        return self.os

    def set_os(self, os):
        self.os = os

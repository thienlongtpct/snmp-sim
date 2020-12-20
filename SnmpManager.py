from SnmpAgent.Device import DeviceType


class SnmpManager:
    def __init__(self):
        self.devices = []

    def add_device(self, device):
        self.devices.append(device.to_dict())

    def count_device(self):
        return len(self.devices)

    def count_up_device(self):
        return len(list(filter(lambda device: device.get_status() == DeviceType.UP, self.devices)))

    def get_devices(self):
        return self.devices

    def to_dict(self):
        return {'devices': self.devices}




from enum import Enum
from random import seed
from random import randint
from datetime import datetime


class PortStatus(Enum):
    Off = 0
    On = 1


class Port:
    def __init__(self, index, capacity):
        seed(datetime.now())
        self.index = index
        self.status = PortStatus.Off
        self.capacity = capacity
        self.current = randint(0, capacity)
        self.average = randint(0, 1000)

    def to_dict(self):
        return {
            "id": id(self),
            "index": self.index,
            "status": self.status.name,
            "capacity": self.capacity,
            "current": self.current,
            "average": self.average
        }

    def shutdown(self):
        self.status = PortStatus.Off

    def start(self):
        self.status = PortStatus.On

    def get_index(self):
        return self.index

    def get_status(self):
        return self.status

    def get_capacity(self):
        return self.capacity

    def get_current(self):
        return self.current

    def get_average(self):
        return self.average

    def set_status(self, status):
        self.status = status

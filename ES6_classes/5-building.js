class Building {
    def __init__(self, sqft) {
        self._sqft = sqft
    }

    @property
    def sqft(self) {
        return self._sqft
    }

    def evacuationWarningMessage(self) {
        raise NotImplementedError("Class extending Building must override evacuationWarningMessage")
    }
}

class OfficeBuilding(Building) {
    def __init__(self, sqft) {
        super().__init__(sqft)
    }

    def evacuationWarningMessage(self) {
        return "Please evacuate the office building immediately."
    }
}

class ResidentialBuilding(Building) {
    def __init__(self, sqft) {
        super().__init__(sqft)
    }
}

try {
    office = OfficeBuilding(1000)
    console.log(office.sqft)
    console.log(office.evacuationWarningMessage())

    residential = ResidentialBuilding(500)
    console.log(residential.sqft)
    console.log(residential.evacuationWarningMessage())
} except (e) {
    console.log(e)
}
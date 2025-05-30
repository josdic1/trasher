import json

class House:
    def __init__(self, score):
        self.score = score

    @property
    def score(self):
        return self._score
    
    @score.setter
    def score(self, value):
        self._score = value

with open('backend/db.json') as f:
    data = json.load(f)

houses = [House(h['score']) for h in data['houses']]

for h in houses:
    print(h.score)

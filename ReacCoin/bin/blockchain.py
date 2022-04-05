import hashlib
import json
import time

class Block():
    def __init__(self,index,timestamp,lasthash,transaction):
        self.index=index
        self.timestamp=timestamp
        self.lasthash=lasthash
        self.trasaction=transaction
        self.hash=self.MakeHash()
    def MakeHash(self):
        data={
            "index":self.index,
            "timestamp":self.timestamp,
            "lasthash":self.lasthash,
            "trasaction":self.trasaction,
        }
        return hashlib.sha256(json.dumps(data).encode("utf-8")).hexdigest()

BlockChain=[]
first=Block(0,str(round(time.time())),"-","####Start####")
BlockChain.append(first)
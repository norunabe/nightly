import hashlib as h,time as t;C=0;L="0"
while True:
    R=h.sha256(f"{C+int(L,16)+round(t.time())}".encode()).hexdigest()
    if R[:4]=="0000":
        print(f"[Try {C}] :: [{R}]");L=R;
    C=C+1
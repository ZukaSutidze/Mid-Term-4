let form = document.querySelector("form")
let input = document.querySelector("input")
let Todo = document.querySelector(".Todo")
let Mainbox = document.querySelector(".Mainbox")
let Circle = document.querySelector(".Circle")
let defaultsrc = `Assets/Mobile/Circle.svg`
let Notdefaultsrc = `Assets/Mobile/Activecircle.svg`
let Moon = `Assets/Mobile/Moon.svg`
let Sun = `Assets/Mobile/Sun.svg`
let Second = `Assets/Mobile/SecondBackground.svg`
let Blackcircle = `Assets/Mobile/Blackcircle.svg`
let First = `Assets/Mobile/Background.svg`
let Back = document.querySelector(".Background")
let number = document.querySelector(".Left span")
let ALL = document.querySelector(".ALL")
let COMPLETED = document.querySelector(".COMPLETED")
let ACTIVE = document.querySelector(".ACTIVE")
let item = document.querySelector(".Items")
let Clear = document.querySelector(".Clear")
let Darkmode = document.querySelector(".Moon")
let Body = document.querySelector("body")
let Allp = document.querySelectorAll("p")
let AllDiv = document.querySelectorAll("div")
let Arr = []
let ActiveArr = []
let CompletedArr = []

ALL.classList.add("Blue")

Darkmode.addEventListener("click", function () {
    if (Darkmode.src.includes(Moon)) {
        Darkmode.src = Sun
    } else {
        Darkmode.src = Moon
    }

    if (Back.src.includes(First)) {
        Back.src = Second
    } else {
        Back.src = First
    }
    Body.classList.toggle("Getblack")
    input.classList.toggle("Getbackground")
    for (let i = 0; i < Allp.length; i++){
        Allp[i].classList.toggle("Getgrey")
        ALL.classList.remove('Getgrey')
    }

    for (let i = 0; i < Arr.length; i++){
        let p = Arr[i].querySelector("p")
        p.classList.remove('Opacity')
    }
        
    if (Circle.src.includes(defaultsrc)) {
        Circle.src = Blackcircle;
    } else {
        Circle.src = defaultsrc;
    }

    for (let i = 0; i < AllDiv.length; i++){
        AllDiv[i].classList.toggle("Getbackground")
        Mainbox.classList.remove("Getbackground")
    }    
})

form.addEventListener("submit", function (e) {
    e.preventDefault()
    CreateDiv()
    ClearValue()
    LastChild(Arr)  
})

ACTIVE.addEventListener("click", function () {
    Active()
    if(ACTIVE.classList.contains('Blue')){
        number.textContent = Arr.length - CompletedArr.length
        ALL.classList.remove("Blue")
    } else {
        number.textContent = Arr.length
        ALL.classList.add("Blue")
    }
})

COMPLETED.addEventListener("click", function () {
    Completed()
    if(COMPLETED.classList.contains('Blue')){
        number.textContent = Arr.length - ActiveArr.length
        ALL.classList.remove("Blue")
    } else {
        number.textContent = Arr.length
        ALL.classList.add("Blue")
    }
})

ALL.addEventListener("click", function () {
    Allarr()
    number.textContent = Arr.length
    
})

function CreateDiv() {
    if (input.value.trim() == "" || input.value.length > 35) {
        return;
    } else {
        let Circle = document.createElement("img")
        let X = document.createElement("div")
        let Todolist = document.createElement("div")
        let P = document.createElement("p")
        
        X.classList.add("Xstyle")
        if (Body.classList.contains("Getblack")) { 
            Circle.src = Blackcircle
            Todolist.classList.add("Divstyle2")
            P.classList.add("Pstyle2")
        }
        else {
            Circle.src = `Assets/Mobile/Circle.svg`
            Todolist.classList.add("Divstyle")
            P.classList.add("Pstyle")
        }
        Circle.classList.add("Circlestyle")
        P.textContent = input.value
        Todolist.appendChild(X)
        Todolist.appendChild(P)
        Todolist.appendChild(Circle)

        Arr.push(Todolist)

        Circle.addEventListener("click", function () {
            if (Circle.src.includes(defaultsrc) ||Circle.src.includes(Blackcircle)  ){
                Circle.src = Notdefaultsrc
                P.classList.add("Opacity")
            } else {
                if (Body.classList.contains("Getblack")) {
                    Circle.src = Blackcircle
                } else {
                    Circle.src = defaultsrc
                }
                P.classList.remove("Opacity")
            }
            COMPLETED.classList.remove("Blue")
            ACTIVE.classList.remove("Blue")
            ALL.classList.add("Blue")
            Allarr()
            number.textContent = Arr.length
    
        })

        Clear.addEventListener("click", function () {
            for (let i = 0; i < Arr.length; i++) {
                let Circle = Arr[i].querySelector("img")
                if (Circle.src.includes(Notdefaultsrc)) {
                    Arr[i].remove()
                    Arr.splice(i, 1)
                }
            }
            number.textContent = Arr.length
            if (Arr.length == 0) {
                item.classList.remove("OnlyBottom")
            }
            LastChild(Arr)
        })

        X.addEventListener("click", function () {
            let parent = this.parentElement;
            parent.remove();
            let index = Arr.indexOf(parent);
            Arr.splice(index, 1);
            number.textContent = Arr.length;
            if (Arr.length == 0) {
                item.classList.remove("Onlybottom")
            }
            COMPLETED.classList.remove("Blue")
            ACTIVE.classList.remove("Blue")
            ALL.classList.add("Blue")
            Allarr()
            LastChild(Arr);
        });

        if (Arr.length >= 0) {
            item.classList.add("Onlybottom")
        }

        ALL.classList.add("Blue")
        if (ACTIVE.classList.contains("Blue")) {
            ACTIVE.classList.remove("Blue")
            Allarr()
        }

        if (COMPLETED.classList.contains("Blue")) {
            COMPLETED.classList.remove("Blue")
            Allarr()
        }
        Darkmode.addEventListener("click", function () {
            if (Body.classList.contains("Getblack")) { 
                Circle.src = Blackcircle
                Todolist.classList.toggle("Divstyle2")
                P.classList.toggle("Pstyle2")
                P.classList.remove("")
                Circle.addEventListener("click", function () {
                    if (Circle.src.includes(defaultsrc)) {
                        Circle.src = Notdefaultsrc
                        P.classList.add("Opacity")
                    } else {
                        Circle.src = defaultsrc
                        P.classList.remove("Opacity")
                    }
                    COMPLETED.classList.remove("Blue")
                    ACTIVE.classList.remove("Blue")
                    ALL.classList.add("Blue")
                    Allarr()
                    number.textContent = Arr.length
            
                })
            }
            else {
                Circle.src = `Assets/Mobile/Circle.svg`
                Todolist.classList.add("Divstyle")
                Todolist.classList.remove("Divstyle2")
                P.classList.add("Pstyle")
                P.classList.remove("Pstyle2")
            }
    })

        Todo.appendChild(Todolist)
    }
}

function ClearValue() {
    number.textContent= Arr.length
    input.value = ""
}

function LastChild(array) {
    array.forEach(function(item, index) {
        if (index === array.length - 1) {
            item.classList.add("OnlyTop");
        } else {
            item.classList.remove("OnlyTop");
        }
    });
}

function Active() { 
    if (COMPLETED.classList.contains('Blue')) {
        Completed()
        COMPLETED.classList.remove('Blue')
    }
    ActiveArr = []
    CompletedArr = []
    for (let i = 0; i < Arr.length; i++){
        let Circle = Arr[i].querySelector("img")
        if (Circle.src.includes(Notdefaultsrc)) {
            CompletedArr.push(Arr[i])
            Arr[i].classList.toggle("None")
        }else {
            ActiveArr.push(Arr[i])
        }
    }
    ACTIVE.classList.toggle('Blue')
    if (ActiveArr.length == 0) {
        item.classList.remove("Onlybottom")
    }
    LastChild(ActiveArr)

}

function Completed() {
    if (ACTIVE.classList.contains('Blue')) {
        Active()
        ACTIVE.classList.remove('Blue')
    }
    ActiveArr = []
    CompletedArr = []
    for (let i = 0; i < Arr.length; i++) {
        let Circle = Arr[i].querySelector("img")
        if (Circle.src.includes(defaultsrc) || Circle.src.includes(Blackcircle)) {
            ActiveArr.push(Arr[i])
            Arr[i].classList.toggle("None")
        } else {
            CompletedArr.push(Arr[i])
        }
    }
    COMPLETED.classList.toggle('Blue')
    if (CompletedArr.length == 0) {
        item.classList.remove("Onlybottom")
    }
    LastChild(CompletedArr)
}

function Allarr() {
    ALL.classList.add("Blue")
    if (ACTIVE.classList.contains('Blue')) {
        ACTIVE.classList.remove('Blue')
    }
    if (COMPLETED.classList.contains('Blue')) {
        COMPLETED.classList.remove('Blue')
    }
    for (let i = 0; i < Arr.length; i++) {
         Arr[i].classList.remove("None")
    }
}




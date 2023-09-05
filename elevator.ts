abstract class Button{
    private status:boolean;
    public pressDown():void{};
    public abstract isPressed():boolean;

}

class ElevatorButton extends Button {
    private destinationFloorNo:Number;
    public isPressed(): boolean {
        return true;
    }
}

class HallButton extends Button{
    private direction:Direction;
    public isPressed(): boolean {
        return true;
    }
}

class ElevatorPanel{
    private elevatorButtons:Array<ElevatorButton>;
    private openButton:ElevatorButton;
    private closeButton:ElevatorButton;
}

class HallPanel{
    up:HallButton;
    down:HallButton;
}

class Display{
    private floor:Number;
    private direction:String;
    private capacity:String;

    public showElevatorDisplay():void{

    }

    public showHallDisplay():void{

    }
}

enum DoorState{
    OPEN,
    CLOSE
}

enum Direction{
    UP,
    DOWN
}

class Door{
    state:DoorState;

    public isOpen(){

    }
}

enum ElevatorState{
    UP,
    DOWN,
    IDLE
}

class ElevatorCar{
    id:Number;
    door:Door;
    current_floor:Number;
    display:Display;
    panel:ElevatorPanel;
    state:ElevatorState;

    openDoor():void{}
    closeDoor():void{}
    move():void{}
    stop():void{}

}

class Floor{
    displays:Array<Display>;
    panels:Array<HallPanel>;
    isBottom:boolean;
    isTop:boolean;
}

class Building{
    floors:Array<Floor>;
    elevators:Array<ElevatorCar>;
    private static building:Building;

    public static getInstance(){
        if(!this.building){
            this.building=new Building();
        }
        return this.building;
    }
}

class ElevatorSystem{
    building:Building;
    monitoring():void{}
    dispatcher():void{}

    private static elevatorSystem:ElevatorSystem;

    public static getInstance(){
        if(!this.elevatorSystem){
            this.elevatorSystem=new ElevatorSystem();
        }
        return this.elevatorSystem;
    }
}

class Panel{}

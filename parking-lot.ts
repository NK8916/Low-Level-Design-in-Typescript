abstract class Vehicle{
    private licenseNo:Number;
    public abstract assignTicket(ticket:ParkingTicket):void;
}

class Truck extends Vehicle{
    assignTicket(): void {
    }
}
class Car extends Vehicle{
    assignTicket(): void {
    }
}

class MotorCycle extends Vehicle{
    assignTicket(): void {
    }
}

class Van extends Vehicle{
    assignTicket(): void {
    }
}

abstract class ParkingSpot{
    private id:Number;
    private isFree:boolean;
    private vehicle:Vehicle;
    public getIsFree():boolean{return true};
    public abstract assignVehicle(vahicle:Vehicle):
}

class Large extends ParkingSpot{
    assignVehicle(): boolean {
        return true;
    }
}

class Compact extends ParkingSpot{
    assignVehicle(): boolean {
        return true;
    }
}

class Handicap extends ParkingSpot{
    assignVehicle(): boolean {
        return true;
    }
}

class TwoWheeler extends ParkingSpot{
    assignVehicle(): boolean {
        return true;
    }
}

enum AccountStatus{
    ACTIVE="active",
    INACTIVE="inactive",
    BLACKLISTED="blacklisted"
}

abstract class Account{
    private userName:string;
    private password:string;
    private status:AccountStatus;
    private person:Person;
    public abstract resetPassword():void;

}

class Admin extends Account{
    public raddParkingSpot(floor,spot):boolean{return true};
    public raddDisplayBoard(floor,displayboard):boolean{return true};
    public raddEntrace(entrance):boolean{return true};
    public raddExit(exit):boolean{return true};
    public resetPassword(): void {
        
    }
}

class ParkingAgent extends Account{
    public rprocessTicket():boolean{return true};
    public resetPassword(): void {
        
    }
}

class Person{
    private name:string;
    private street:string;
    private city:string;
    private state:string;

}

class Address{
    private city:string;
    private state:string;
    private zipcode:string;
}

class ParkingTicket{

}

class Entrance{
    getParkingTicket():ParkingTicket{return true}
}

class Exit{
    scanTicket():ParkingTicket{return true}
}

enum PaymentStatus {
    COMPLETED, 
    FAILED, 
    PENDING, 
    UNPAID, 
    REFUNDED
  }

  class Displayboard{
    id:Number;
    private handicappedSpot:Array<Handicap>;
    private compactSpot:Array<Compact>;
    private largeSpot:Array<Large>;
    private motorCycleSpot:Array<MotorCycle>;
  
  // Member function
    public showFreeSlot:void;
  }

  public class ParkingRate {
    // Data members
    private hours:Number;
    private rate:Number;
    // Member function
    public calculate():void;
  }

  class ParkingLot{
    private id:Number;
    private name:string;
    private address:string;
    private  parkingRate:ParkingRate;

    private entrance:Map<String,String>;
    private exit:Map<String,String>;

    // Create a hashmap that identifies all currently generated tickets using their ticket number
    private  tickets:Map<String, ParkingTicket>;

    // The ParkingLot is a singleton class that ensures it will have only one active instance at a time
    // Both the Entrance and Exit classes use this class to create and close parking tickets
    private static parkinglot:ParkingLot;

    // Created a private constructor to add a restriction (due to Singleton)
    private ParkingLot() {
        // Call the name, address, parking_rate elements of the customer in the parking lot from the database
        // Create initial entrance and exit hashmaps respectively
    }

    // Created a static method to access the singleton instance of ParkingLot
    public static getInstance():ParkingLot {
        if (this.parkinglot == null) {
            this.parkinglot = new ParkingLot();
        }
        return this.parkinglot;
    }

    public addEntrance(entrance:Entrance):boolean{return true}
    public addExit(exit:Exit):boolean{return true}

    // This function allows parking tickets to be available at multiple entrances
    public getParkingTicket(vehicle:Vehicle):ParkingTicket {}

    public isFull(type:ParkingSpot):boolean{return true}
  }
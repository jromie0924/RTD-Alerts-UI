export class TwitterApiKeysModel {
    consumer: string;
    consumerSecret: string;

    constructor(con?: string, sec?: string) {
        this.consumer = con;
        this.consumerSecret = sec;
    }
}

import { Artist } from "./artist.model";

export class Event {
    id: string = "";
    label: string = "";
    startDate: string = "";
    endDate: string = "";
    artists: Artist[] = [];

    copy(): Event {
        return Object.assign(new Event(), this);
    }

    static fromJson(categoryJson: Event): Event {
        return Object.assign(new Event(), categoryJson);
    }

    toJson() : Event {
        return Object.assign({}, this);
    } 
}

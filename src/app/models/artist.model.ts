export class Artist {
    id: string = "";
    label: string = "";

    copy(): Artist {
        return Object.assign(new Artist(), this);
    }

    static fromJson(categoryJson: Artist): Artist {
        return Object.assign(new Artist(), categoryJson);
    }

    toJson() : Artist {
        return Object.assign({}, this);
    } 
}

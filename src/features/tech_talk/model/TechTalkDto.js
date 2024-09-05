class TechTalkDto {
    constructor(id, name, date, time, description, assignee) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.time = time;
        this.description = description;
        this.assignee = assignee;
    }
}

module.exports = TechTalkDto;

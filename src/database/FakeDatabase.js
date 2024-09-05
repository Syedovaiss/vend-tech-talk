
const TechTalkDto = require('../features/tech_talk/model/TechTalkDto');
const AssigneeDto = require('../features/assignees/model/AssigneeDto')

class FakeDatabase {
  constructor() {
    if (FakeDatabase.instance) {
      return FakeDatabase.instance;
    }

    this.techTalks = [];
    this.assignees = [];
    FakeDatabase.instance = this;
  }


  addTalk(techTalkDto) {
    if (techTalkDto instanceof TechTalkDto) {
      this.techTalks.push(techTalkDto);
    } else {
      throw new Error('Invalid argument: Expected an instance of TechTalkDto');
    }
  }

  getAllTalks() {
    return this.techTalks;
  }

  addAssignee(assigneeDto) {
    if (assigneeDto instanceof AssigneeDto) {
      this.assignees.push(assigneeDto);
    } else {
      throw new Error('Invalid argument: Expected an instance of AssigneeDto');
    }
  }

  getAssignees() {
    return this.assignees;
  }
}

module.exports = FakeDatabase;
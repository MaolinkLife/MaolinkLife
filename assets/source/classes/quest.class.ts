export class QuestRequirement {

}

export class QuestCondition {

    status: 'not received' | 'complete' | 'failed' | 'progress';

    setQuestConditionStatus(status: 'not received' | 'complete' | 'failed' | 'progress') {
        this.status = status;
    }

}

export class QuestReward {

}

export class Quest {
    id: string;

    name: string;

    description: string;

    requirement: QuestRequirement[];

    status: 'not received' | 'complete' | 'failed' | 'progress';

    questConditionsList: QuestCondition[];

    currentQuestCondition: QuestCondition;

    questRewards: QuestReward[];

    constructor(name: string, description: string, questConditions: QuestCondition[]) {

    }

    setCurrentCondition(condition: QuestCondition) {
        this.currentQuestCondition = condition;
    }

    addCondition(condition: QuestCondition) {
        this.questConditionsList.push(condition);
    }

    setQuestConditionStatus(questCondition: QuestCondition, status: 'not received' | 'complete' | 'failed' | 'progress') {
        questCondition.setQuestConditionStatus(status);
    }

    setCurrentStatus(status: 'not received' | 'complete' | 'failed' | 'progress') {
        this.status = status;
    }

    addDescription(text: string) {
        this.description += text;
    }

    setDescription(text: string) {
        this.description = text;
    }
}

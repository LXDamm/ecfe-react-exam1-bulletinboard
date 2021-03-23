import ReactPost from './ReactPost';

interface Question {
    question: string;
    answer: string;
}

function BulletinBoard() {
    const questions = [
        {
            question: 'Vad är tre fördelar med att använda React?',
            answer: '1. Det är snabbt att komma igång med. 2. Det används av Facebook och är ett av dom populäraste frameworksen och har därför mycket dokumentation och guider på nätet. 3. Det är snabbt.'
        },
        {
            question: 'Vad är tre nackdelar med att använda React?',
            answer: '1. Det är gjort av Facebook. 2. Det tar mer resurser än att enbart göra vanilla JavaScript/TypeScript och HTML. 3. Bibloteket är stort.'
        },
        {
            question: 'Vad är tre skillnader mellan React och Angular?',
            answer: '1. Angular har fler funktioner inbyggt i frameworket som React saknar, vilket gör att en både har större flexibeiltet med React, men också att en måste använda ytterligare biblotek för att få likvärdiga funktioner som Angular. 2. React använder en virtual DOM, vilket leder till att hela webbläsarens DOM inte behöver ändras, vilket leder till snabbare exsekvering. 3. Medans React huvudsakligen är uppbyggt av koncepetet av componenter så har Angular fler olika fundamentala koncept som en måste lära sig.'
        },
        {
            question: 'Vad är tre bibliotek man kan använda med React?',
            answer: '1. Redux. 2. React Bootstrap. 3. Enzyme.'
        }
    ];
    const renderQuestions = (questions: Array<Question>) => {
        let q: Array<JSX.Element> = new Array<JSX.Element>();
        questions.forEach((question) => {
            q.push(
                <ReactPost question={question.question} answer={question.answer}/>
            );
        });
        return q;
    }
    return (
        <>
            <div className="BulletinBoard">
                { renderQuestions(questions) }
            </div>
        </>
    );
}

export default BulletinBoard;
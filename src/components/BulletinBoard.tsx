import ReactPost from './ReactPost';

interface Question {
    question: string;
    answer: string;
}

function BulletinBoard() {
    const questions = [
        {
            question: 'Vad är tre fördelar med att använda React?',
            answer: 'Det är snabbt att komma igång med. Det är populärt. Det är snabbt.'
        },
        {
            question: 'Vad är tre nackdelar med att använda React?',
            answer: 'Det är gjort av Facebook. Det är stort'
        },
        {
            question: 'Vad är tre skillnader mellan React och Angular?',
            answer: ''
        },
        {
            question: 'Vad är tre bibliotek man kan använda med React?',
            answer: 'Redux. Bootstrap'
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
        <>{renderQuestions(questions)}</>
    );
}

export default BulletinBoard;
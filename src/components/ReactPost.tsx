import { useState } from "react";
import PostLike from "./PostLike";

interface Props {
    question: string,
    answer: string
}

const ReactPost: React.FC<Props> = (props: any) => {
    const [liked, setLiked] = useState(false);
    return (
        <div className="ReactPost">
            <h4>{ props.question }</h4>
            <p>{ props.answer }</p>
            { liked ? <PostLike/> : <button onClick={() => { setLiked(true) }}>👍</button> }
        </div>
    );
}

export default ReactPost;
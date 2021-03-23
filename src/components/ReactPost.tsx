import { useState } from "react";
import PostLike from "./PostLike";

interface Props {
    question: string,
    answer: string
}

const ReactPost: React.FC<Props> = (props: any) => {
    const [liked, setLiked] = useState(false);
    return (
        <>
            <p>{props.question}</p>
            <p>{props.answer}</p>
            {liked ? <PostLike/> : <button onClick={() => { setLiked(true) }}>👍</button>}
        </>
    );
}

export default ReactPost;
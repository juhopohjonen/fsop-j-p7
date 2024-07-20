const AnecdoteView = ({ content, author, info, votes }) => {
    return (
        <>
            <h1>{content}</h1>
            <p>by {author}</p>

            <p>see more: <a href={info}>{info}</a></p>

            <p>has {votes} votes</p>
        </>
    )
}

export default AnecdoteView
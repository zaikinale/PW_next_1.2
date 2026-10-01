interface CommentPageProps {
    params: Promise<{ slug: string; commentId: string }>;
}

export default async function CommentPage({ params }: CommentPageProps) {
    const { slug, commentId } = await params;
    return (
        <div>
            <h1>Комментарий {commentId}</h1>
            <p>К посту №{slug}</p>
        </div>
    );
}
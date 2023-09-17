namespace Application.Comments;

public class CommentDto
{
    public int Id { get; set; }
    public DateTime CreatedAt { get; set; }
    public int Body { get; set; }
    public int Username { get; set; }
    public int DisplayName { get; set; }
    public int Image { get; set; }

}
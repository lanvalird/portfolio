import { CalendarFilled, InfoCircleFilled } from "@ant-design/icons";
import PostType from "../../types/Post";
import Badge from "../ui/Badge";
import style from "./Posts.module.css";
import Notify from "../ui/Notify";
import { Link } from "react-router-dom";

export default function Posts({
  posts,
  title,
  max,
}: {
  posts: PostType[];
  title?: string;
  max: number;
}) {
  return (
    <section className={style.container}>
      {title && <h2 className={style.title}>{title}</h2>}
      <Notify className={style.notify}>
        <InfoCircleFilled /> Страница с постами не реализована.
      </Notify>

      {posts.length !== 0
        ? max
          ? posts
              .slice(0, max)
              .map((post) => <Post key={post.id} post={post} />)
          : posts.map((post) => <Post key={post.id} post={post} />)
        : "no posts"}
    </section>
  );
}

function Post({ post }: { post: PostType }) {
  return (
    <Link className={style.post__container} to={`/blog/${post.id}`}>
      <img
        className={style.post__cover}
        src={post.image ?? "/blog/cover.png"}
        alt=""
      />

      <div className={style.post__info}>
        <p className={style.post__title}>
          <Badge>
            <CalendarFilled /> {post.date}
          </Badge>
          {post.title}
        </p>
        <p>{post.description}</p>
      </div>
    </Link>
  );
}

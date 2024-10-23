import style from "./Notify.module.css";

export default function Notify(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={
        props.className
          ? `${style.container} ${props.className}`
          : style.container
      }
    >
      {props.children}
    </div>
  );
}

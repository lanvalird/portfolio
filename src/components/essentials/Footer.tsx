export default function Footer(params: React.HTMLProps<HTMLDivElement>) {
  return (
    <footer {...params}>
      <span style={{ textAlign: "center" }}>
        Моя GitHub страница –{" "}
        <a
          href="https://github.com/aculaOne"
          style={{
            color: "var(--bg-color-light)",
          }}
        >
          @aculaOne
        </a>
      </span>
    </footer>
  );
}

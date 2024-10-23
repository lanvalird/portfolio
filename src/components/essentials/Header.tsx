export default function Header(params: React.HTMLProps<HTMLDivElement>) {
  return (
    <header {...params}>
      <h1
        style={{
          textAlign: "center",
          fontSize: "24px",
          fontWeight: 700,
        }}
      >
        aculaOne's Portfolio
      </h1>
    </header>
  );
}

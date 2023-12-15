function Footer(params) {
  return (
    <footer
      class="container-fluid"
      style={{
        backgroundColor: "var(--background_ecm)",
        color: "ivory",
        textAlign: "left",
        verticalAlign: "middle",
        font: "12px Arial, sans-serif",
        paddingBottom: "1px",
      }}
    >
      <p
        style={{
          marginRight: "10px",
        }}
      >
        Desenvolvido por PR-Dev
      </p>
    </footer>
  );
}

export default Footer;

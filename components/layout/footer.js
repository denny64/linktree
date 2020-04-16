const LOGO_URL = "https://d1qr63pinnvtia.cloudfront.net/assets/27dc8464c9b0cd2ddfc3d9b0f297e787eaddcea4/images/logo.svg";

export default () => (
  <footer>
    <a href="/" target="_blank">
      <img className="footer-logo" src={LOGO_URL} alt="Linktree Logo" />
    </a>
    <style jsx>{`
      .footer-logo {
        width: 150px;
        height: 20px;
      }
      footer {
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `}</style>
  </footer>
)
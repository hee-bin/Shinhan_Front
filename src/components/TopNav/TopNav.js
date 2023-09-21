import styles from "./TopNav.module.css";
import Logo from "../../assets/images/logo.svg";
import shareIcon from "../../assets/images/ic_share.svg";

const TopNav = () => {
  const APP_DOWNLOAD_LINK =
    "https://open.shinhansec.com/phone/goM.jsp?p=OTUxMCYmJiZTJiY*&amp;v=2";

    const onClickCopyButton = () => {
      const siteLink = window.location.href; // 현재 사이트의 링크를 가져옵니다.
      navigator.clipboard.writeText(siteLink); // 클립보드에 복사합니다.
  
      // 알림창을 띄웁니다.
      alert('현재 사이트 링크가 클립보드에 복사되었습니다!');
    };

    return (
      <div className={styles.container}>
        <div className={styles.title_container}>
             {/* 로고 */}
          <img src={Logo} alt="logo" />
          <div className={styles.rightButtonContainer}>
            {/*앱 다운로드 버튼 */}
            <a href={APP_DOWNLOAD_LINK} target="_blank">
              <div className={styles.roundButton}>앱 다운로드</div>
            </a>
    
            {/* 공유 버튼 */}
            <div className={styles.circleButton} onClick={onClickCopyButton}>
              <img src={shareIcon} alt="share" />
            </div>
          </div>
        </div>



        <div className={styles.nav_container}>
          <div className={styles.sub_nav}> 
            국내주식
            </div>
          <div className={styles.sub_nav}>
            해외주식
            </div>
        </div>
     
      </div>

    );
  };

export default TopNav;

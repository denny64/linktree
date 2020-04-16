import { useState } from 'react';
import styles from './card.module.css';
import DATA from '../../data';

const MUSIC = "music";
const LIST = "list";
const SOLD_OUT = "Sold out";
const ARROW = "https://cdn0.iconfinder.com/data/icons/navigation-set-arrows-part-one/32/ChevronRight-512.png";

const ListLink = ({ link }) => {
  const { description, items } = link;
  const [showBody, useShowBody] = useState(false);

  function toggleBody() {
    useShowBody(!showBody);
  }

  return (
    <>
      <a onClick={toggleBody} className={styles.card}>
        {description}
      </a>
      {
        showBody && (
          <div className={styles.list}>
            {
              items.map(item => {
                return (
                  <a key={item.name} className={styles.item} href={item.link} target="_blank">
                    <div className={styles.listHeader}>
                      <div>{`${item.name} - ${item.date}`}</div>
                      <div className={styles.description}>{item.description}</div>
                    </div>
                    {
                      item.status === SOLD_OUT ?
                        <div className={styles.soldOut}>{SOLD_OUT}</div> : <img className={styles.arrowRight} src={ARROW} />
                    }
                  </a>
                );
              })
            }
          </div>
        )
      }
    </>
  )
};

// TODO: Embed iframe music players for each of the platforms
const MusicLink = ({ link }) => {
  const { description, platforms } = link;
  const [showBody, useShowBody] = useState(false);

  function toggleBody() {
    useShowBody(!showBody);
  }

  return (
    <>
      <a onClick={toggleBody} className={styles.card}>
        {description}
      </a>
      {
        showBody && (
          <>
            <div className={styles.player}>
              <div className={styles.playerInner}>
                <img className={styles.musicCover} src={link.songCover} />
                <div>{`${link.songName} - ${link.songArtist}`}</div>
              </div>
            </div>
            <div className={styles.list}>
              {
                platforms.map(item => {
                  return (
                    <a key={item.name} className={styles.item} href={item.link} target="_blank">
                      <img className={styles.platformLogo} src={item.logo} />
                      <div>{item.name}</div>
                      <img className={styles.arrowRight} src={ARROW} />
                    </a>
                  );
                })
              }
            </div>
          </>
        )
      }
    </>
  )
};


const ClassicLink = ({ link }) => {
  const { href, description } = link;
  return (
    <a href={href} className={styles.card} target="_blank">
      {description}
    </a>
  )
};


const LinkRenderer = ({ link }) => {
  const { href, description, type } = link;
  // TODO: Better error handling + truncating the link description (when neccessary) + URL validation
  // Probably better to handle on the backend though
  if (!href || !description) return <span />;

  if (type === MUSIC) {
    return <MusicLink link={link} />;
  } else if (type === LIST) {
    return <ListLink link={link} />;
  } else {
    // Classic Link
    return <ClassicLink link={link} />;
  }
}


export const LinkCollection = ({ links }) => {
  // Taking customised styles into consideration
  // Using style-jsx here instead of css modules for simplicity
  const { styles } = DATA.user;
  return (
    <div className="grid">
      {links.map(link => <LinkRenderer key={link.href} link={link} />)}
      <style jsx>{`
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          margin-top: 1rem;
          width: 700px;
        }
        @media (max-width: 700px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
        :global(a[class^='card_card']), :global(a[class*='card_card']) {
            border: 2px solid ${styles["primaryColor"]};
            background-color: ${styles["primaryColor"]};
            color: ${styles["secondaryColor"]};
        }
        :global(a[class^='card_card']:hover), :global(a[class*='card_card']:hover) {
            border: 2px solid ${styles["primaryColor"]};
            background-color: transparent;
            color: ${styles["primaryColor"]};
        }
      `}</style>
    </div>
  )
}
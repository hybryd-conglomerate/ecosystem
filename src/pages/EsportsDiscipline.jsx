







import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const DISCIPLINES = {
  'dota-2': {
    name: 'DOTA 2',
    image: 'academy-dota.jpg',
    category: 'MOBA / COMPETITIVE',
    description: 'Командная стратегия и соревновательная аналитика.',
    fields: [
      { key: 'kills', label: 'Kills', type: 'number' },
      { key: 'deaths', label: 'Deaths', type: 'number' },
      { key: 'assists', label: 'Assists', type: 'number' },
      { key: 'networth', label: 'Net worth', type: 'number' },
      { key: 'gpm', label: 'GPM', type: 'number' },
      { key: 'xpm', label: 'XPM', type: 'number' },
      { key: 'damage', label: 'Hero damage', type: 'number' }
    ],
    players: ['PLAYER 01', 'PLAYER 02', 'PLAYER 03', 'PLAYER 04', 'PLAYER 05']
  },

  cs2: {
    name: 'COUNTER-STRIKE 2',
    image: 'academy-cs2.jpg',
    category: 'TACTICAL FPS',
    description: 'Тактическая стрельба, командная работа и анализ раундов.',
    fields: [
      { key: 'kills', label: 'Kills', type: 'number' },
      { key: 'deaths', label: 'Deaths', type: 'number' },
      { key: 'kd', label: 'K/D', type: 'number' },
      { key: 'adr', label: 'ADR', type: 'number' },
      { key: 'hs', label: 'Headshot %', type: 'number' },
      { key: 'rating', label: 'Rating', type: 'number' },
      { key: 'maps', label: 'Maps played', type: 'number' }
    ],
    players: ['PLAYER 01', 'PLAYER 02', 'PLAYER 03', 'PLAYER 04', 'PLAYER 05']
  },

  'starcraft-ii': {
    name: 'STARCRAFT II',
    image: 'academy-sc2.jpg',
    category: 'REAL-TIME STRATEGY',
    description: 'Индивидуальная стратегия, скорость решений и микроуправление.',
    fields: [
      { key: 'race', label: 'Race', type: 'text' },
      { key: 'apm', label: 'APM', type: 'number' },
      { key: 'epm', label: 'EPM', type: 'number' },
      { key: 'wins', label: 'Wins', type: 'number' },
      { key: 'losses', label: 'Losses', type: 'number' },
      { key: 'map', label: 'Map', type: 'text' },
      { key: 'duration', label: 'Match duration', type: 'text' }
    ],
    players: ['PLAYER 01']
  },

  valorant: {
    name: 'VALORANT',
    image: 'academy-valorant.jpg',
    category: 'TACTICAL FPS',
    description: 'Тактическая координация, точность и командная синергия.',
    fields: [
      { key: 'kills', label: 'Kills', type: 'number' },
      { key: 'deaths', label: 'Deaths', type: 'number' },
      { key: 'assists', label: 'Assists', type: 'number' },
      { key: 'acs', label: 'ACS', type: 'number' },
      { key: 'hs', label: 'Headshot %', type: 'number' },
      { key: 'kast', label: 'KAST %', type: 'number' },
      { key: 'map', label: 'Map', type: 'text' }
    ],
    players: ['PLAYER 01', 'PLAYER 02', 'PLAYER 03', 'PLAYER 04', 'PLAYER 05']
  },

  'ea-sports-fc': {
    name: 'EA SPORTS FC',
    image: 'academy-fc.jpg',
    category: 'SPORTS SIMULATION',
    description: 'Футбольная тактика, индивидуальное мастерство и матчевая аналитика.',
    fields: [
      { key: 'goals', label: 'Goals', type: 'number' },
      { key: 'assists', label: 'Assists', type: 'number' },
      { key: 'shots', label: 'Shots', type: 'number' },
      { key: 'possession', label: 'Possession %', type: 'number' },
      { key: 'passes', label: 'Pass accuracy %', type: 'number' },
      { key: 'rating', label: 'Player rating', type: 'number' },
      { key: 'score', label: 'Match score', type: 'text' }
    ],
    players: ['PLAYER 01']
  }
};

function formatSize(bytes) {
  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function EsportsDiscipline() {
  const { disciplineSlug } = useParams();
  const discipline = DISCIPLINES[disciplineSlug];

  const [media, setMedia] = useState([]);
  const [metrics, setMetrics] = useState({});
  const [snapshots, setSnapshots] = useState([]);
  const [matches, setMatches] = useState([]);

  const [selectedPlayer, setSelectedPlayer] = useState('PLAYER 01');
  const [matchForm, setMatchForm] = useState({
    opponent: '',
    event: '',
    score: '',
    date: ''
  });

  const mediaUrls = useRef([]);

  useEffect(() => {
    setMedia([]);
    setSnapshots([]);
    setMatches([]);
    setSelectedPlayer(discipline?.players?.[0] || 'PLAYER 01');

    setMetrics(
      Object.fromEntries(
        (discipline?.fields || []).map(field => [field.key, ''])
      )
    );

    return () => {
      mediaUrls.current.forEach(url => URL.revokeObjectURL(url));
      mediaUrls.current = [];
    };
  }, [disciplineSlug]);

  if (!discipline) {
    return (
      <section className="section-pad">
        <h1>404</h1>
        <p>Дисциплина не найдена.</p>
        <Link to="/academy" className="button button-outline">
          Вернуться в академию ↗
        </Link>
      </section>
    );
  }

  function addFiles(event, type) {
    const selected = Array.from(event.target.files || []);

    const newFiles = selected.map(file => {
      const url = URL.createObjectURL(file);
      mediaUrls.current.push(url);

      return {
        id: `${file.name}-${file.lastModified}-${Math.random()}`,
        name: file.name,
        size: file.size,
        type: file.type,
        url,
        category: type,
        date: new Date().toLocaleDateString('ru-RU')
      };
    });

    setMedia(previous => [...newFiles, ...previous]);

    // Разрешаем повторно выбрать тот же файл.
    event.target.value = '';
  }

  function removeFile(id) {
    const file = media.find(item => item.id === id);

    if (file) {
      URL.revokeObjectURL(file.url);
      mediaUrls.current = mediaUrls.current.filter(
        url => url !== file.url
      );
    }

    setMedia(previous => previous.filter(item => item.id !== id));
  }

  function saveStatistics(event) {
    event.preventDefault();

    const entry = {
      id: Date.now(),
      player: selectedPlayer,
      date: new Date().toLocaleString('ru-RU'),
      values: { ...metrics }
    };

    setSnapshots(previous => [entry, ...previous]);
  }

  function saveMatch(event) {
    event.preventDefault();

    if (!matchForm.opponent.trim()) return;

    setMatches(previous => [
      {
        id: Date.now(),
        ...matchForm
      },
      ...previous
    ]);

    setMatchForm({
      opponent: '',
      event: '',
      score: '',
      date: ''
    });
  }

  const videoAccept = 'video/*,.dem,.dem.gz,.sc2replay,.replay';
  const screenshotAccept = 'image/*';

  return (
    <div className="esport-page">

      <section className="esport-hero">
        <div
          className="esport-hero-image"
          style={{
            backgroundImage: `url(/img/${discipline.image})`
          }}
        />

        <div className="esport-hero-overlay" />

        <div className="esport-hero-content">
          <Link to="/academy" className="esport-back">
            ← ACADEMY / DISCIPLINES
          </Link>

          <span className="section-kicker">
            {discipline.category}
          </span>

          <h1>{discipline.name}</h1>

          <p>{discipline.description}</p>

          <span className="esport-status">
            <i /> DEMO ENVIRONMENT
          </span>
        </div>
      </section>

      <section className="section-pad esport-section">
        <div className="section-kicker">
          <span>01 / TEAM ROSTER</span>
          <span>HYBRID ESPORTS</span>
        </div>

        <div className="esport-roster">
          {discipline.players.map((player, index) => (
            <div className="esport-player" key={player}>
              <span>0{index + 1}</span>
              <div className="esport-player-avatar">
                {String(index + 1).padStart(2, '0')}
              </div>
              <strong>{player}</strong>
              <small>ROSTER SLOT</small>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad esport-section">
        <div className="section-kicker">
          <span>02 / MEDIA CENTER</span>
          <span>UPLOAD ARCHIVE</span>
        </div>

        <div className="esport-upload-grid">

          <label className="esport-upload">
            <span className="upload-icon">↥</span>
            <strong>Загрузить демо / видео</strong>
            <small>
              Видео, игровые записи и реплеи
            </small>
            <input
              type="file"
              multiple
              accept={videoAccept}
              onChange={event => addFiles(event, 'video')}
            />
          </label>

          <label className="esport-upload">
            <span className="upload-icon">▧</span>
            <strong>Загрузить скриншоты</strong>
            <small>
              Игровые моменты, результаты и статистика
            </small>
            <input
              type="file"
              multiple
              accept={screenshotAccept}
              onChange={event => addFiles(event, 'image')}
            />
          </label>

        </div>

        <div className="esport-media-list">
          {media.length === 0 && (
            <div className="esport-empty">
              <span>MEDIA ARCHIVE / EMPTY</span>
              <p>
                Здесь появятся загруженные видеозаписи,
                демофайлы и скриншоты.
              </p>
            </div>
          )}

          {media.map(file => (
            <article className="esport-media-item" key={file.id}>
              <div className="esport-media-preview">
                {file.type.startsWith('image/') ? (
                  <img src={file.url} alt={file.name} />
                ) : file.type.startsWith('video/') ? (
                  <video src={file.url} controls />
                ) : (
                  <span>DEMO</span>
                )}
              </div>

              <div className="esport-media-info">
                <strong>{file.name}</strong>
                <small>
                  {file.category === 'image' ? 'SCREENSHOT' : 'DEMO / VIDEO'}
                  {' · '}
                  {formatSize(file.size)}
                  {' · '}
                  {file.date}
                </small>

                {!file.type.startsWith('image/') &&
                  !file.type.startsWith('video/') && (
                    <a href={file.url} download={file.name}>
                      Скачать файл ↗
                    </a>
                  )}
              </div>

              <button
                type="button"
                className="esport-remove"
                onClick={() => removeFile(file.id)}
              >
                УДАЛИТЬ ×
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad esport-section">
        <div className="section-kicker">
          <span>03 / PERFORMANCE DATA</span>
          <span>PLAYER ANALYTICS</span>
        </div>

        <form
          className="esport-stat-form"
          onSubmit={saveStatistics}
        >
          <div className="esport-form-top">
            <div>
              <h2>ИГРОВАЯ<br /><em>СТАТИСТИКА.</em></h2>
              <p>
                Добавление статистического снимка игрока.
              </p>
            </div>

            <label className="esport-field">
              <span>ИГРОК</span>
              <select
                value={selectedPlayer}
                onChange={event => setSelectedPlayer(event.target.value)}
              >
                {discipline.players.map(player => (
                  <option key={player} value={player}>
                    {player}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="esport-metric-inputs">
            {discipline.fields.map(field => (
              <label className="esport-field" key={field.key}>
                <span>{field.label}</span>
                <input
                  type={field.type}
                  step={field.type === 'number' ? 'any' : undefined}
                  value={metrics[field.key] ?? ''}
                  onChange={event =>
                    setMetrics(previous => ({
                      ...previous,
                      [field.key]: event.target.value
                    }))
                  }
                  placeholder="—"
                />
              </label>
            ))}
          </div>

          <button className="button button-primary" type="submit">
            Сохранить статистику ↗
          </button>
        </form>

        <div className="esport-snapshots">
          {snapshots.length === 0 ? (
            <div className="esport-empty">
              <span>PERFORMANCE LOG / EMPTY</span>
              <p>
                Сохранённые показатели появятся здесь.
              </p>
            </div>
          ) : (
            snapshots.map(snapshot => (
              <article
                className="esport-snapshot"
                key={snapshot.id}
              >
                <div className="esport-snapshot-heading">
                  <strong>{snapshot.player}</strong>
                  <small>{snapshot.date}</small>
                </div>

                <div className="esport-metric-values">
                  {discipline.fields.map(field => (
                    <div key={field.key}>
                      <small>{field.label}</small>
                      <strong>
                        {snapshot.values[field.key] || '—'}
                      </strong>
                    </div>
                  ))}
                </div>
              </article>
            ))
          )}
        </div>
      </section>

      <section className="section-pad esport-section">
        <div className="section-kicker">
          <span>04 / MATCH HISTORY</span>
          <span>COMPETITIVE RECORD</span>
        </div>

        <form
          className="esport-match-form"
          onSubmit={saveMatch}
        >
          <h2>ДОБАВИТЬ <em>МАТЧ.</em></h2>

          <div className="esport-match-fields">
            <label className="esport-field">
              <span>СОПЕРНИК</span>
              <input
                value={matchForm.opponent}
                onChange={event =>
                  setMatchForm(previous => ({
                    ...previous,
                    opponent: event.target.value
                  }))
                }
                placeholder="Название команды"
                required
              />
            </label>

            <label className="esport-field">
              <span>ТУРНИР</span>
              <input
                value={matchForm.event}
                onChange={event =>
                  setMatchForm(previous => ({
                    ...previous,
                    event: event.target.value
                  }))
                }
                placeholder="Название турнира"
              />
            </label>

            <label className="esport-field">
              <span>СЧЁТ</span>
              <input
                value={matchForm.score}
                onChange={event =>
                  setMatchForm(previous => ({
                    ...previous,
                    score: event.target.value
                  }))
                }
                placeholder="2 : 1"
              />
            </label>

            <label className="esport-field">
              <span>ДАТА</span>
              <input
                type="date"
                value={matchForm.date}
                onChange={event =>
                  setMatchForm(previous => ({
                    ...previous,
                    date: event.target.value
                  }))
                }
              />
            </label>
          </div>

          <button className="button button-primary" type="submit">
            Добавить результат ↗
          </button>
        </form>

        <div className="esport-match-list">
          {matches.length === 0 ? (
            <div className="esport-empty">
              <span>MATCH HISTORY / EMPTY</span>
              <p>
                История матчей пока не опубликована.
              </p>
            </div>
          ) : (
            matches.map(match => (
              <article className="esport-match" key={match.id}>
                <div>
                  <small>{match.date || 'ДАТА НЕ УКАЗАНА'}</small>
                  <strong>HYBRID vs {match.opponent}</strong>
                  <span>{match.event || 'Турнир не указан'}</span>
                </div>

                <b>{match.score || '— : —'}</b>
              </article>
            ))
          )}
        </div>
      </section>

      <section className="esport-bottom">
        <Link to="/academy">← ВСЕ ДИСЦИПЛИНЫ</Link>
        <span>HYBRID / ESPORTS ECOSYSTEM</span>
      </section>

    </div>
  );
}

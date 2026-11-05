const projects = [
  {
    "tags": [
      "Unity",
      "Photon Fusion",
      "Nakama",
      "AWS",
      "Zenject"
    ],
    "description": "<strong>3D Social Game similar to Play Together</strong><br>\n• 250 CCU concurrent players tested<br>\n• 1,500+ in-game items system<br>\n• Dance Battle mini-game highlight<br>\n• Players can interact via chat, emojis, and actions (waving, dancing, etc.)<br>\n• Event system (Halloween, Christmas)<br>\n• Anti-speed hack protection<br>\n• Chat history & authentication system<br>\n<strong>Responsibilities</strong><br>\n• Responsible for 90% of game features<br>\n• From concept to release<br>\n<strong>Technologies</strong><br>\n• Movement: Unity NavMesh.<br>\n• Multiplayer: Photon Fusion.<br>\n• Libraries: Zenject, UniTask, UniRx, Odin Inspector, Cinemachine, Best HTTP, Koreographer, MagicaCloth, Vuplex WebView, Toony Colors Pro 2.<br>\n• External Tools: NeuralNote<br>",
    "role": "Unity Game Developer",
    "title": "Party Parrot World",
    "images": [
      "partyparrotworld-01.webp",
      "partyparrotworld-02.webp"
    ],
    "video": "https://cdn.hdquang.net/PartyParrotWorldTrailers.mp4",
    "links": [
      [
        "Website",
        "https://www.partyparrotworld.com/"
      ],
      [
        "YouTube",
        "https://www.youtube.com/@partyparrotworld/videos"
      ]
    ]
  },
  {
    "tags": [
      "Unity",
      "Photon Bolt",
      "NavMesh",
      "C#"
    ],
    "description": "<strong>PvP 3vs3 Shooter Game</strong><br>\n• Fast-paced multiplayer shooter<br>\n• 3-versus-3 combat<br>\n• Anthropomorphic bear characters<br>\n• Strategic team play + arcade shooting<br>\n<strong>Responsibilities</strong><br>\n• Map setup & character spawning<br>\n• Animations & optimization<br>\n• VFX, UI & shaders implementation<br>\n• Bot AI with NavMesh pathfinding<br>\n• Game Logic",
    "role": "Unity Game Developer",
    "title": "Battle Bears Heroes",
    "images": [
      "bbh1.webp",
      "bbh2.webp"
    ],
    "video": "https://cdn.hdquang.net/BATTLE.BEARS.HEROES.Official.Trailer.mp4",
    "links": [
      [
        "Website",
        "https://battlebears.com/pages/games"
      ]
    ]
  },
  {
    "tags": [
      "Unity",
      "Photon PUN",
      "Oculus Quest",
      "VR"
    ],
    "description": "<strong>VR Game</strong><br>\n• Maintained and optimized existing project<br>\n• Re-configured Photon PUN networking<br>\n• Ported game to VR devices (Oculus Quest)<br>\n• Added new maps and content",
    "role": "Unity Game Developer",
    "title": "Epic Snails",
    "images": [
      "snail1.webp",
      "snail2.webp"
    ],
    "video": "https://cdn.hdquang.net/Epic.Snails.trailer.mp4",
    "links": [
      [
        "Website",
        "https://epicsnails.com/"
      ]
    ]
  },
  {
    "tags": [
      "Unity",
      "Photon Fusion",
      "Turn-based"
    ],
    "description": "<strong>Turn-based Multiplayer Game</strong><br>\n• Implemented multiplayer functionality<br>\n• Used Photon Fusion for networking<br>\n• Built for blockchain gaming platform",
    "role": "Unity Developer",
    "title": "Gunstar Metaverse",
    "images": [
      "gunstar.webp",
      "gunstar2.webp"
    ],
    "video": "https://cdn.hdquang.net/Gunstar.Trailer.mp4",
    "links": [
      [
        "Google Play",
        "https://play.google.com/store/apps/details?id=com.gunstarlabs.gsts"
      ],
      [
        "YouTube",
        "https://www.youtube.com/@GunstarMetaverseChannel"
      ]
    ]
  },
  {
    "tags": [
      "Unity",
      "Touch UI",
      "WebGL"
    ],
    "description": "<strong>Touch Screen Interactive Game</strong><br>\n• Developed within one day<br>\n• Used on touchscreen TV during promotion<br>\n• Word puzzle game format<br>\n• Custom UI for public interaction",
    "role": "Game Developer",
    "title": "Promo Event Mini-game",
    "images": [
      "duoihinhbatchu.webp"
    ],
    "video": "",
    "links": [
      [
        "Play online",
        "https://duoihinhbatchu.hdquang.net/"
      ]
    ]
  },
  {
    "tags": [
      "Unity 2D",
      "C#",
      "Optimization",
      "Bug Fixing"
    ],
    "description": "<strong>Legacy 2D Games Portfolio</strong><br>\n• Maintained games for BlueStack platform deployment<br>\n• Ensured compatibility with Android emulation environment<br>\n• Integrated BlueStack IAP (In-App Purchase) system<br>\n• Bug fixes and performance optimizations<br>\n• Platform compatibility updates<br>\n• Code refactoring and documentation<br>\n• User experience improvements",
    "role": "Game Developer / Maintainer",
    "title": "Legacy 2D Games",
    "images": [
      "icon-letgoat.jpg",
      "icon_rainblow.png",
      "icon_.battlebearsfortress.jpg"
    ],
    "video": "",
    "links": []
  },
  {
    "title": "Gameloft mobile games",
    "role": "Senior Game Developer / Mentor · Dec 2015–Mar 2021",
    "images": [
      "icon_A9.webp",
      "icon_dhc.png",
      "icon_disneymagic.webp",
      "icon_rival.webp",
      "icon_zombie.png"
    ],
    "video": "",
    "links": [],
    "tags": [
      "C++",
      "Android NDK",
      "In-house game engine",
      "Optimization",
      "Mentoring"
    ],
    "description": "<strong>AAA mobile games portfolio</strong><br>Asphalt 9: Legends · Dungeon Hunter Champions · Disney Magic Kingdoms · Blitz Brigade: Rival Tactics · Zombie Anarchy<br><br><strong>Work across these projects at Gameloft</strong><br>• Performance optimization and stability improvements<br>• Win32 to Android game porting<br>• Research and implementation of Android-specific features<br>• Android build systems configuration<br>• 2D/3D rendering fixes and crash/freeze bug resolution<br>• Mentoring and coaching junior developers",
    "galleryType": "icons",
    "imageLabels": [
      "Asphalt 9: Legends",
      "Dungeon Hunter Champions",
      "Disney Magic Kingdoms",
      "Blitz Brigade: Rival Tactics",
      "Zombie Anarchy"
    ]
  }
];

// Project notes are kept separately from the lightweight overview cards.
const dialog = document.querySelector('#project-dialog');
const dialogBody = document.querySelector('#dialog-body');
const closeButton = dialog.querySelector('.dialog-close');
let projectTrigger;

document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    let count = 0;
    document.querySelectorAll('[data-filter]').forEach(item => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    document.querySelectorAll('.project-card').forEach(card => {
      card.hidden = filter !== 'all' && card.dataset.category !== filter;
      if (!card.hidden) count++;
    });
    document.querySelector('.project-count').textContent = `${count} project${count === 1 ? '' : 's'}`;
  });
});

document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => {
    const project = projects[Number(button.dataset.project)];
    if (!project) return;
    projectTrigger = button;
    // All project content below is authored locally, never supplied by visitors.
    dialogBody.innerHTML = `
      <h2 id="dialog-title">${project.title}</h2>
      <p class="dialog-role">${project.role}</p>
      <div class="dialog-gallery${project.galleryType === 'icons' ? ' dialog-icon-gallery' : ''}">${project.images.map((src, index) => `<img src="assets/${src}" alt="${project.imageLabels?.[index] || `${project.title} — screenshot ${index + 1}`}" width="800" height="500">`).join('')}</div>
      ${project.video ? `<video controls playsinline preload="none" poster="assets/${project.images[0]}" aria-label="${project.title} trailer"><source src="${project.video}" type="video/mp4"></video><p class="video-note">Trailer not loading? <a href="${project.video}" target="_blank" rel="noopener noreferrer">Open video directly ↗</a></p>` : ''}
      <div class="dialog-description">${project.description}</div>
      <div class="tags">${project.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
      <div class="dialog-links">${project.links.map(([label, href]) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${label} <span aria-hidden="true">↗</span></a>`).join('')}</div>`;
    dialog.showModal();
    dialog.scrollTop = 0;
    document.body.classList.add('modal-open');
    closeButton.focus({ preventScroll: true });
  });
});

closeButton.addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});
dialog.addEventListener('close', () => {
  dialog.querySelectorAll('video').forEach(video => {
    video.pause();
    video.removeAttribute('src');
    video.querySelectorAll('source').forEach(source => source.removeAttribute('src'));
    video.load();
  });
  dialogBody.replaceChildren();
  document.body.classList.remove('modal-open');
  projectTrigger?.focus({ preventScroll: true });
});

// Highlight the current chapter without listening to every scroll event.
const navigationLinks = [...document.querySelectorAll('.nav-links a')];
const chapterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navigationLinks.forEach(link => {
      if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  });
}, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
document.querySelectorAll('main > section[id]').forEach(section => chapterObserver.observe(section));
document.querySelector('#year').textContent = new Date().getFullYear();

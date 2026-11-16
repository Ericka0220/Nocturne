const entries = {

  archive: {
    k: '01 / KNOWLEDGE · RESTRICTED ACCESS',
    t: 'The Archive',
    p: 'The Archive is tended by the Keepers, a quiet order sworn to preserve what the world has forgotten. Its shelves contain field notes on the Hollowborn, pressed petals from the Thornwood, and artifacts that should not cast shadows.',
    tags: [
      'Creature index',
      'Cursed artifacts',
      'Classified cases'
    ],
    f: 'Featured file: The Bell That Rings Underwater · Case 07'
  },

  afterhours: {
    k: '02 / SOUND · THE LISTENING ROOM',
    t: 'Afterhours',
    p: 'A room for the hours that have no name. Find curated listening moods, nocturnal soundscapes, and fictional artists from across the Veil. The player below begins as a visual ambience switch, ready for a future soundtrack.',
    tags: [
      'Moonlit / ambient',
      'Velvet / dark pop',
      'Ritual / cinematic'
    ],
    f: 'Now cataloguing: songs that remember you'
  },

  realm: {
    k: '03 / DISCOVERY · UNCHARTED TERRITORY',
    t: 'The Realm',
    p: 'Three regions are known to those who cross: the Thornwood, where trees grow around forgotten wishes; the Drowned Cathedral, whose bells toll beneath a black lake; and the Glass March, where every reflection arrives a moment late.',
    tags: [
      'The Thornwood',
      'Drowned Cathedral',
      'The Glass March'
    ],
    f: 'Map status: incomplete. Some paths move.'
  },

  atelier: {
    k: '04 / DESIRE · PRIVATE COLLECTION',
    t: 'The Atelier',
    p: 'The Atelier gathers beautiful objects from both sides of the Veil. Each piece carries a provenance, a maker, and a story. Nothing here is ordinary, and nothing is without a price beyond coin.',
    tags: [
      'Nocturne No. 09 · Extrait',
      'Thorn reliquary',
      'The Night Garden collection'
    ],
    f: 'Collection note: made for the beautifully curious'
  }

};


// =====================================
// OPEN PORTAL MODALS
// =====================================

function openModal(key) {

  const entry = entries[key];

  if (!entry) return;

  document.getElementById('modalKicker').textContent = entry.k;

  document.getElementById('modalTitle').textContent = entry.t;

  document.getElementById('modalText').textContent = entry.p;

  document.getElementById('modalFoot').textContent = entry.f;

  document.getElementById('modalTags').innerHTML =
    entry.tags
      .map(tag => `<span class="tag">${tag}</span>`)
      .join('');

  document.getElementById('modal').classList.add('open');

}


// Make each portal clickable

document.querySelectorAll('.portal').forEach(portal => {

  portal.addEventListener('click', () => {

    openModal(portal.dataset.modal);

  });

});


// =====================================
// CLOSE MODAL
// =====================================

document.getElementById('closeModal').onclick = () => {

  document.getElementById('modal').classList.remove('open');

};


// Close when clicking outside the modal

document.getElementById('modal').addEventListener('click', event => {

  if (event.target.id === 'modal') {

    event.currentTarget.classList.remove('open');

  }

});


// =====================================
// WEBSITE NAVIGATION
// =====================================

function jump(id) {

  document.getElementById(id)?.scrollIntoView({

    behavior: 'smooth'

  });

}


// Navigation buttons

document.querySelectorAll('[data-scroll]').forEach(button => {

  button.onclick = () => {

    jump(button.dataset.scroll);

  };

});


// Secondary navigation buttons

document.querySelectorAll('[data-jump]').forEach(button => {

  button.onclick = () => {

    jump(button.dataset.jump);

  };

});


// Enter the Veil buttons

document.getElementById('enterBtn').onclick = () => {

  jump('portals');

};

document.getElementById('enterTop').onclick = () => {

  jump('portals');

};


// =====================================
// HIDDEN SECRET DISCOVERY
// =====================================

document.getElementById('secretBtn').onclick = () => {

  const result = document.getElementById('secretResult');

  const button = document.getElementById('secretBtn');

  result.classList.toggle('show');

  button.textContent = result.classList.contains('show')

    ? 'Seal revealed ✓'

    : 'Reveal a secret ✧';

};

let playing = false;

document.getElementById('playBtn').onclick = () => {

  playing = !playing;

  const player = document.getElementById('player');

  const button = document.getElementById('playBtn');

  const track = document.getElementById('track');


  player.classList.toggle('playing', playing);

  button.textContent = playing ? 'Ⅱ' : '▶';

  track.textContent = playing

    ? 'The Veil Is Breathing'

    : 'Silence Before the Storm';

};
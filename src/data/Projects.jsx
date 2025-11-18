export const projects = [
    {
        id: 'space-shooter',
        title: 'Space Shooter',
        tag: 'Unity',
        subtitle: '2D arcade met physics en pooling',
        desc: 'Top-down space shooter gemaakt in Unity. Focus op performantie (object pooling), snelle input en polished VFX.',
        details: 'Gebouwd met Unity 2021, C# en de built-in 2D renderer. Includes pooling, enemy waves, and simple AI.',
        screenshots: [
            { src: 'https://via.placeholder.com/1200x675.png?text=Space+Shooter+1', alt: 'Space Shooter screenshot 1' },
            { src: 'https://via.placeholder.com/1200x675.png?text=Space+Shooter+2', alt: 'Space Shooter screenshot 2' }
        ],
        highlights: [
            {
                title: 'Object Pooling',
                subtitle: 'Efficiënte bullet management',
                description: 'Vermijdt allocations door bullets te hergebruiken uit een pool — essentieel voor stabiele 60fps op mobiel.',
                image: 'https://via.placeholder.com/800x450.png?text=Pooling+Diagram',
                code: {
                    language: 'csharp',
                    snippet: `// Basic object pool (Unity C#)
public class BulletPool : MonoBehaviour {
    public GameObject bulletPrefab;
    Queue<GameObject> pool = new Queue<GameObject>();
    public GameObject Get() {
        if(pool.Count == 0) {
            var go = Instantiate(bulletPrefab);
            return go;
        }
        var obj = pool.Dequeue();
        obj.SetActive(true);
        return obj;
    }
    public void Return(GameObject obj) {
        obj.SetActive(false);
        pool.Enqueue(obj);
    }
}`
                }
            },
            {
                title: 'Polished VFX',
                subtitle: 'Screen shake + particles',
                description: 'Korte voorbeelden van VFX combinaties die de feel verbeteren zonder perf loss.',
                image: 'https://via.placeholder.com/800x450.png?text=VFX',
                code: {
                    language: 'csharp',
                    snippet: `// Trigger particle + shake
public void OnEnemyHit() {
    particles.Play();
    StartCoroutine(Shake(0.15f, 0.25f));
}`
                }
            }
        ]
    },

    {
        id: 'procedural-dungeon',
        title: 'Procedural Dungeon',
        tag: 'Unity / C#',
        subtitle: 'Rogue-lite dungeon generator',
        desc: 'Procedural room- and corridor generation met seedable RNG en weight-based room placement.',
        details: 'Perlin-noise en BSP-achtige partitioning gecombineerd voor snelle, variabele levels.',
        screenshots: [
            { src: 'https://via.placeholder.com/1200x675.png?text=Dungeon+1', alt: 'Dungeon screenshot 1' },
            { src: 'https://via.placeholder.com/1200x675.png?text=Dungeon+2', alt: 'Dungeon screenshot 2' }
        ],
        highlights: [
            {
                title: 'Room Placement',
                subtitle: 'Seedable & deterministic',
                description: 'Rooms worden deterministisch gegenereerd op basis van een seed — handig voor reproduceerbare runs.',
                image: 'https://via.placeholder.com/800x450.png?text=Rooms',
                code: {
                    language: 'csharp',
                    snippet: `// Simple seeded RNG usage
System.Random rng = new System.Random(seed);
int width = rng.Next(8, 16);`
                }
            },
            {
                title: 'Corridor Carving',
                subtitle: 'Connectiviteit zonder overlap',
                description: 'Carve corridors tussen kamers, zorg voor loops en interessante navigatie.',
                image: 'https://via.placeholder.com/800x450.png?text=Corridors',
                code: {
                    language: 'pseudo',
                    snippet: `// Pseudo: carve corridor between centers
if (!roomA.connected && !roomB.connected) {
  carveLine(roomA.center, roomB.center);
}`
                }
            }
        ]
    },

    {
        id: 'realtime-multiplayer',
        title: 'Realtime Multiplayer Demo',
        tag: 'Photon / Unity',
        subtitle: 'Fast sync & interpolation',
        desc: 'Multiplayer demo met Photon PUN: matchmaking, state sync en client-side interpolation.',
        details: 'Gebruik van snapshot-smoothing en client prediction voor lage latency feel.',
        screenshots: [
            { src: 'https://via.placeholder.com/1200x675.png?text=Multiplayer+1', alt: 'Multiplayer screenshot 1' },
            { src: 'https://via.placeholder.com/1200x675.png?text=Multiplayer+2', alt: 'Multiplayer screenshot 2' }
        ],
        highlights: [
            {
                title: 'Interpolation',
                subtitle: 'Smooth remote movement',
                description: 'Buffer snapshots en interpoleer tussen server-updates voor vloeiende remote players.',
                image: 'https://via.placeholder.com/800x450.png?text=Interpolation',
                code: {
                    language: 'csharp',
                    snippet: `// Simple interpolation
Vector3 targetPos;
void Update() {
  transform.position = Vector3.Lerp(transform.position, targetPos, Time.deltaTime * 10f);
}`
                }
            },
            {
                title: 'Snapshot Send',
                subtitle: 'Lightweight network state',
                description: 'Stuur alleen relevante state (pos, rot, inputs) en reconstructeer lokaal.',
                image: 'https://via.placeholder.com/800x450.png?text=Snapshot',
                code: {
                    language: 'csharp',
                    snippet: `// Example: serialize minimal state
public void OnPhotonSerializeView(PhotonStream stream, PhotonMessageInfo info) {
  if (stream.IsWriting) {
    stream.SendNext(transform.position);
    stream.SendNext(velocity);
  } else {
    targetPos = (Vector3)stream.ReceiveNext();
    velocity = (Vector3)stream.ReceiveNext();
  }
}`
                }
            }
        ]
    },

    {
        id: 'pbr-landscape',
        title: 'PBR Landscape',
        tag: 'Unreal',
        subtitle: 'Photoreal terrain + foliage',
        desc: 'High-fidelity landscape with procedural foliage placement and LOD.',
        details: 'Unreal Engine landscape tools, foliage tool, and runtime LOD tuning for performance.',
        screenshots: [
            { src: 'https://via.placeholder.com/1200x675.png?text=Landscape+1', alt: 'Landscape screenshot 1' },
            { src: 'https://via.placeholder.com/1200x675.png?text=Landscape+2', alt: 'Landscape screenshot 2' }
        ],
        highlights: [
            {
                title: 'Runtime LOD',
                subtitle: 'Performance friendly foliage',
                description: 'Combine wind shaders + GPU culling om drawcalls te minimaliseren.',
                image: 'https://via.placeholder.com/800x450.png?text=LOD',
                code: {
                    language: 'hlsl',
                    snippet: `// Very small HLSL wind modifier (concept)
float3 ApplyWind(float3 pos, float time) {
  return pos + float3(sin(pos.x + time) * 0.1, 0, 0);
}`
                }
            }
        ]
    },

    {
        id: 'puzzle-platformer',
        title: 'Puzzle Platformer',
        tag: 'Godot',
        subtitle: 'Physics + puzzle mechanics',
        desc: 'Small platformer with physics puzzles, moving platforms and save states.',
        details: 'Built in Godot 3.5, modular scenes and reusable puzzle components.',
        screenshots: [
            { src: 'https://via.placeholder.com/1200x675.png?text=Platformer+1', alt: 'Platformer screenshot 1' },
            { src: 'https://via.placeholder.com/1200x675.png?text=Platformer+2', alt: 'Platformer screenshot 2' }
        ],
        highlights: [
            {
                title: 'Save/Load',
                subtitle: 'Checkpoint system',
                description: 'Lightweight JSON-save voor player state en puzzle progress.',
                image: 'https://via.placeholder.com/800x450.png?text=Save',
                code: {
                    language: 'gdscript',
                    snippet: `# Save example (Godot GDScript)
var save = { "pos": player.global_position, "hp": player.hp }
File.new().open("user://save.dat", File.WRITE).store_string(to_json(save))`
                }
            }
        ]
    }
]
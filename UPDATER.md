# How the site keeps itself current

This file is the source of truth for the automated jobs. The scheduled tasks only say "follow UPDATER.md", so if a task is ever deleted, recreate it from the prompts at the bottom of this file.

Rob plays Dagnar Barleigh on WoW Forever from a Windows PC (`DESKTOP-9C5EP7B`). Game folder: `D:\Blizzard\World of Warcraft\_forever_`.

| What | Where on the PC |
|---|---|
| Chat log (auto-enabled by the addon) | `Logs\WoWChatLog.txt` |
| Addon saved data | `WTF\Account\R00T3D3\SavedVariables\DagnarChatLog.lua` |
| Addon | `Interface\AddOns\DagnarChatLog\` (expected `loadedVersion` 6) |
| Addon screenshots | `Screenshots\` (post-worthy moments) |

Every job needs the PC awake with the Claude desktop app open. If the PC can't be reached, stop quietly, because the next run will catch up.

---

## Job 1: Dispatches (hourly)

1. Clone or pull `robbedell/dagnarbarleigh` (main branch).
2. Stage `WoWChatLog.txt` and `DagnarChatLog.lua` from the PC.
3. Read `logs/last_processed.txt` (format `M/D HH:MM:SS.mmm`, local Eastern time). Take only the log lines after it. If there are none, or the newest line is under 45 minutes old (he's still playing), stop without committing.
4. Write a per-day excerpt to `logs/YYYY-MM-DD.txt`. Include **only Dagnar's own lines** (says, yells, party, guild, whispers to and from, emotes), his quest, level, death and profession events, and the *names* of the people he talked to. Never copy other players' chat.
5. Turn the session into posts in `campaign.json` `posts[]`, appended in time order. Use the same shape as the existing posts: `id` (`YYYY-MM-DD-HHMM-slug`), `time` (ISO with -05:00), `type` (`dispatch|milestone|met|death|toast|letter`), `zone`, `title`, `text` (1–2 sentences), `detail` (2–4 sentences), `pints`, `bangs`, `people`, `image`, `alt`.
   - Aim for 3–8 posts per evening, one per real beat, not one per quest.
   - **Voice:** first person, Dagnar. Short sentences, dry, warm underneath, no speeches. Read `dagnar_barleigh.md` first and stay inside it.
   - **Out-of-character chat** ("reload", "I'm just a degenerate hacker", "food buff", LFG logistics) is never quoted as Dagnar. It can inform what happened.
   - Questie auto-messages (`{rt1} Questie: ...`) and loot rolls are events, not speech.
   - **Who counts as met:** someone is *met* only if they whispered him, shared a party line with him, emoted at him, were targeted by him, or said two or more things near him. Everyone else is *heard*: not a standing, not a post. Never name overheard strangers in posts.
   - Secrets in `dagnar_barleigh.md` stay secret. Never state the Loch Modan number.
   - If the addon took a screenshot for a moment, resize it to about 1600px wide, save it as `shots/<post-id>.jpg`, and set `image` and `alt`.
6. Update the rest of `campaign.json` to match: `people` (race, standing, warmth, met, metZone, lastSeen, lastSaid, note), `stats` (level, deaths, drinks, tipsy/drunk/smashed, crafted, groups, guild, people, races, zones, lastZone, sessions, asOf), `zonesVisited`, `recipes`, `eyebrows_lost` if something exploded.
7. Append one line per post to the **Session log** in `dagnar_barleigh.md` (`- YYYY-MM-DD HH:MM — type: text`).
8. Write the newest processed line's timestamp to `logs/last_processed.txt`. Update `logs/moments_processed.txt` (unix time) if addon moments were used.
9. Validate (`python3 -m json.tool campaign.json`), then commit `Dispatches: YYYY-MM-DD (N posts)` and push.
10. Addon health check: if `DagnarChatLog.lua` has no `loadedVersion = 6`, or it hasn't changed while the chat log has, the addon isn't loading. Note that in the commit body. Don't fail the run over it.

## Job 2: Daily brief (once a day, early afternoon)

1. Pull the repo and read `campaign.json` plus `dagnar_barleigh.md`.
2. Rewrite `arc`: `mood`, `beat` (the next thing to play for, in one or two sentences, including any setup fix like "turn the addon on" if needed), `storySoFar` (a short prose summary from the start), `frontRunner`, `runningBits`, `updated`, `beatDate`, `summaryDate`. Answer open mailbag notes (GitHub issues labelled `note`) in `arc.replies`/posts if any are present.
3. Rewrite the **Where his head is at** section of `dagnar_barleigh.md` to match.
4. Commit `Brief: YYYY-MM-DD` and push. If nothing has changed since the last brief, still refresh `beat` so it reads correctly for today.

## Job 3: Nightly check-in (in Rob's Dagnar chat)

At midnight Eastern, post a status message of at most 4 lines in the chat: posts added since the last check-in, updater health (re-enable the Dispatches task if it was suspended because the PC slept), whether tonight's session has been published yet, and addon health. Then schedule the next check-in.

---

## Task prompts (for recreating them)

**Dagnar dispatches** (hourly, requires the PC, folder `D:\Blizzard\World of Warcraft\_forever_`):
> Run Job 1 (Dispatches) from UPDATER.md in the GitHub repo robbedell/dagnarbarleigh. Attach the repo with add_repo (push access) and clone it, read UPDATER.md and dagnar_barleigh.md, then follow Job 1 exactly. Work quietly. If there's nothing new, stop without committing.

**Dagnar brief** (daily 12:24 PM ET, requires the PC):
> Run Job 2 (Daily brief) from UPDATER.md in the GitHub repo robbedell/dagnarbarleigh. Attach the repo with add_repo (push access) and clone it, read UPDATER.md and dagnar_barleigh.md, then follow Job 2 exactly. Work quietly.

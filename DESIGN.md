---
name: "Confiable Tech — Light studio"
description: "A cool-grey, image-led studio identity pairing precise sans-serif type with human serif emphasis."
colors:
  paper: "#e9e9eb"
  ink: "#0f0f0f"
  muted: "#535357"
  accent: "#bc3506"
  signal: "#e7480d"
  rule: "#bcbcbf"
  on-accent: "white"
  inverse-muted: "#b9b9bd"
  inverse-rule: "#515154"
  inverse-accent: "#ff8c66"
  sovereign-surface: "#dce4df"
  sovereign-border: "#b7c5bd"
  sovereign-ink: "#354b3e"
  sovereign-hover: "#20382d"
  sovereign-on-hover: "#f4f6f4"
  aaq-surface: "#dcd9e6"
  aaq-border: "#c0b9ce"
  aaq-ink: "#4b435a"
  ribbon-surface: "#f9f9f9"
  ribbon-border: "#c5c5c8"
  scrollbar: "#77777a"
typography:
  display:
    fontFamily: "Geist,Arial,sans-serif"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-.04em"
  headline:
    fontFamily: "Geist,Arial,sans-serif"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-.04em"
  project-title:
    fontFamily: "Geist,Arial,sans-serif"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-.04em"
  project-statement:
    fontFamily: "Geist,Arial,sans-serif"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-.035em"
  service-title:
    fontFamily: "Geist,Arial,sans-serif"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-.025em"
  body:
    fontFamily: "Geist,Arial,sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Geist,Arial,sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
  pill:
    fontFamily: "Geist,Arial,sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.25
  serif-emphasis:
    fontFamily: "'Instrument Serif',Georgia,serif"
    fontWeight: 400
    letterSpacing: "-.025em"
rounded:
  pill: "100px"
spacing:
  edge-mobile: "20px"
  control-block: "10px"
  control-inline: "22px"
  icon-gap: "18px"
  paragraph-gap: "24px"
  content-gap: "40px"
  intro-gap: "64px"
  story-gap: "80px"
  section-desktop: "130px"
  section-tablet: "90px"
  section-mobile: "76px"
  project-gap: "122px"
  project-gap-mobile: "72px"
components:
  pill-accent:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.pill}"
    rounded: "{rounded.pill}"
    padding: "10px 22px"
  pill-accent-hover:
    backgroundColor: "{colors.ink}"
  pill-outline:
    textColor: "{colors.ink}"
    typography: "{typography.pill}"
    rounded: "{rounded.pill}"
    padding: "10px 22px"
  pill-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  pill-outline-sovereign-hover:
    backgroundColor: "{colors.sovereign-hover}"
    textColor: "{colors.sovereign-on-hover}"
  menu-toggle:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.pill}"
    rounded: "{rounded.pill}"
    padding: "10px 18px"
  text-link:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
  service-accordion:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    padding: "24px 0"
  team-entry:
    textColor: "{colors.ink}"
    padding: "25px 0 0"
  contact-arrow:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    width: "130px"
    height: "130px"
  mixed-face-heading:
    textColor: "{colors.ink}"
    typography: "{typography.headline}"
---

# Design System: Confiable Tech — Light studio

## Overview

**Creative North Star: "Light studio"**

Light studio pairs cool-grey space and near-black typography with a restrained orange action colour. Geist supplies clarity; upright Instrument Serif brings a human voice inside the same headline. The visual character is spacious, direct and editorial rather than ornamental.

Real product screens provide the imagery and most of the colour. Broad, square-edged project fields sit alongside fine rules, open text and a dark service surface. Depth is reserved for screenshot sheets and the compact navigation overlay, leaving the surrounding page calm.

**Key Characteristics:**
- Large mixed-face headlines with regular-weight sans-serif structure and upright serif emphasis.
- A cool-grey canvas, near-black text and deliberate orange contact actions.
- Actual product imagery on square-edged, softly tinted presentation fields.
- Fine rules, generous whitespace and minimal interface chrome.
- Native disclosures, progressively enhanced navigation and reduced-motion support.

## Colors

The palette is cool and neutral, with orange used for action and interaction rather than large decorative fields. Frontmatter is normative; the names below describe how those tokens are applied.

### Primary

- **Action orange** (`accent`): filled contact pills, the circular contact link, light-surface focus outlines and text-link hover.
- **Selection orange** (`signal`): selected text background with ink-coloured text; distinct from the action orange.
- **Inverse orange** (`inverse-accent`): service-title and link hover, plus keyboard focus on the dark service and footer surfaces.
- **On-accent white** (`on-accent`): labels and arrow strokes on filled orange controls.

### Secondary

These are product-presentation colours, not additional global action accents.

- **Sovereign sage** (`sovereign-surface`): the dashboard presentation field, supported by `sovereign-border` around the screenshot and `sovereign-ink` for explanatory text, captions and the emblem. The outlined product link uses `sovereign-hover` and `sovereign-on-hover` when hovered.
- **Aprende lavender** (`aaq-surface`): the wide screenshot presentation field, with `aaq-border` around the image and `aaq-ink` for its caption.

### Neutral

- **Cool paper** (`paper`): the page and compact navigation surface; also primary text on dark surfaces.
- **Near-black ink** (`ink`): headings, body copy, dark service/footer surfaces and the hover fill of the primary contact control.
- **Soft graphite** (`muted`): supporting paragraphs and metadata on light surfaces.
- **Fine grey rule** (`rule`): light-section dividers and the compact menu border.
- **Inverse support** (`inverse-muted`, `inverse-rule`): secondary text and separators on dark surfaces.
- **Screenshot sheet neutrals** (`ribbon-surface`, `ribbon-border`): the thin material behind the decorative product ribbon.
- **Scrollbar grey** (`scrollbar`): the native scrollbar thumb against cool paper.

**The Two Orange Roles Rule.** Use the deeper accent for white-labelled actions and light-surface focus; reserve the brighter signal for text selection. Dark surfaces use the lighter inverse accent for hover and focus.

## Typography

**Display and body font:** Geist, with Arial and sans-serif fallbacks. The self-hosted variable face supports weights 100–900; normal reading and most headings use 400.

**Emphasis font:** Instrument Serif, with Georgia and serif fallbacks. The implemented face is normal style at weight 400; emphasis is upright, not italic.

The pairing creates a clear sans-serif structure with a softer human phrase embedded in it. Tight negative tracking belongs to large headings; body text remains untracked and comfortably spaced. The frontmatter records stable type properties. Fluid sizes and responsive overrides below are component-specific, not an invented modular scale.

### Hierarchy

- **Display:** the hero's sans-serif lines use `clamp(88px,11.3vw,176px)`, line-height 1 and tight tracking. Serif words enlarge to `1.11em`. At 900px and below, the base size becomes `11.1vw`; at 650px and below, the first line uses `13.5vw` and the last `12.8vw`.
- **Headline:** section headings use `clamp(44px,6.1vw,88px)` and line-height 1.02. At 650px and below they use `clamp(40px,10.3vw,64px)`. Studio and contact headings have their own observed ranges: `clamp(42px,5.4vw,78px)` and `clamp(52px,8.2vw,118px)` respectively, becoming `clamp(39px,10.1vw,62px)` and `clamp(44px,11.1vw,68px)` on mobile.
- **Project title:** `clamp(32px,4.5vw,64px)`, line-height 1.1; mobile `clamp(32px,8.3vw,49px)`.
- **Project statement:** `clamp(30px,3.4vw,48px)`, line-height 1.12. It becomes 30px at the tablet breakpoint, 34px in mobile stories and 29px at the narrow-phone breakpoint.
- **Service title:** `clamp(24px,2.65vw,38px)`, line-height 1.15; mobile 25px, narrow phone 23px.
- **Body:** the frontmatter body role is the reading baseline. Paragraphs have a general maximum of 70ch, tightened to 62ch in service disclosures and to 36ch in the desktop Sovereign story.
- **Label:** captions, categories, roles and footer metadata use the smaller regular-weight role. Labels stay in natural sentence case rather than a separate uppercase system.
- **Pill:** inherits the body family, size and weight with a compact line-height of 1.25.

**The Shared Line Rule.** Keep serif emphasis inside the sans-serif headline, at regular weight and normal style; it is a change of voice, not an italic effect.

## Layout

The page is fluid rather than enclosed in a fixed maximum-width site container. Shared horizontal edges use `clamp(20px,3.4vw,56px)`, becoming the fixed mobile edge token at 650px and below. The named spacing entries are observed uses, not a requirement to snap every measurement to an artificial scale.

- **Broad view:** standard section padding uses the desktop section token. Introductions pair a large heading with a smaller supporting paragraph in a `1.4fr 1fr` grid; the introduction gap token separates them. Screenshot stories use two equal columns, with a responsive gap in the Sovereign gallery. Service rows and team entries start at a 25% inset.
- **At 1200px and below:** the ribbon scales to .86, the hero minimum height becomes 660px and the Sovereign gallery gap becomes 50px.
- **At 900px and below:** standard section padding uses the tablet token; introductory grids become `1.2fr 1fr`; service and team insets become 12%; the ribbon scales to .69.
- **At 650px and below:** standard section padding uses the mobile token. Introductions, project stories, the dashboard gallery, team list and contact layout stack. The service/team inset is removed, captions become vertical and header navigation can become a disclosure. Desktop-only editorial line breaks disappear; retain literal word spacing around them. The ribbon scales to .44.
- **At 360px and below:** the brand, menu, service titles and story statements compact further; the ribbon scales to .38.
- **At 1600px and above:** only the ribbon receives the additional 1.15 scale treatment.

The hero is a bounded composition, not an unrestricted viewport-height section: its desktop height is `calc(100svh - 104px)` with a 740px minimum and 1000px maximum. The header/hero relationship changes at tablet and mobile sizes. Its two headline lines frame a clipped screenshot ribbon, while supporting content remains below it. Mobile retains that relationship through smaller ribbon scale and different vertical anchors.

## Elevation & Depth

Most surfaces are flat. Fine rules separate text sections; sage and lavender provide broad tonal fields behind product imagery. Thin screenshot borders and soft, offset shadows make the image sheets physical without turning the whole interface into floating cards.

### Shadow Vocabulary

The sidecar holds the exact shadow values for the ribbon sheet, Sovereign screenshot, Aprende screenshot and compact navigation overlay. They are distinct implemented treatments, not a general low/medium/high elevation ladder.

The ribbon stage uses perspective (1600px) and five separately rotated screenshot sheets. Native scroll adds a short upward drift: the displacement is clamped to 48px and follows scroll at a factor of .075. There is no looping animation or scroll hijack. Navigation underlines and disclosure icons use the shared easing curve; pills use brief colour transitions. The contact circle also rotates on hover. Reduced motion removes transitions, smooth scrolling and ribbon translation, and suppresses the contact hover rotation while keeping the static screenshot composition.

**The Image Depth Rule.** Keep text sections and project fields flat. Give depth to screenshot sheets and the compact navigation overlay, not to every content block.

## Shapes

Project fields, screenshot frames, text sections and the mobile navigation panel remain square-edged. Pills use the frontmatter pill radius; the contact arrow is a true circle (`50%` radius). The system does not define a generic rounded-card scale.

Borders are fine (1px), either in the light rule colour, dark inverse rule or the product-specific screenshot border. Arrow icons use rounded stroke caps and joins, usually in a 24px box with a 1.5px stroke. The service disclosure icon is 28px; the large contact arrow has a thinner 1px stroke.

## Components

### Action pills

Compact and direct. The filled contact variant uses action orange and white, with the frontmatter padding and pill shape. It has a minimum height of 46px in the base style, becoming 44px inside mobile navigation. Hover changes the fill to ink. The outlined product variant has a 1px current-colour border, switching to ink and paper on hover; its Sovereign context uses the product-specific hover pair. All retain visible keyboard focus.

### Text links

Underlined rather than button-shaped, with a fine underline offset by 5px, an 18px arrow gap and a 44px minimum height. Hover uses action orange on light backgrounds and inverse orange on dark backgrounds. Direction changes are conveyed by rotating the same arrow geometry.

### Navigation

A spare wordmark and a horizontal row of links. Plain links have a fine underline that expands from the left on hover. At the mobile breakpoint, JavaScript reveals a dark pill toggle and turns the navigation into a bordered paper overlay with a soft shadow. Opening focuses the first link; Escape closes the menu and returns focus to the toggle. Link activation, outside interaction, focus leaving the navigation and breakpoint changes also close it. Without JavaScript, links remain visible and wrap instead of disappearing. The toggle exposes its open state with `aria-expanded`.

### Project fields and screenshot ribbon

Image-led and square-edged. Sovereign pairs a wide dashboard with a story in a sage two-column field. Aprende places a wide screenshot within lavender, then uses an open two-column story below. Gallery images keep their native aspect ratios and use meaningful alternative text. The decorative ribbon repeats those real screenshots in cropped, diagonally transformed sheets; it is hidden from assistive technology and cannot intercept pointer input. Preserve the distinction between decorative crops and readable gallery images.

### Service accordions

Native `details` and `summary` on a dark field, separated by fine inverse rules. The first item starts open; items are independent rather than exclusive. Base summary rows have a 106px minimum height and vertical padding of 24px; mobile rows use a 96px minimum. The plus rotates 45 degrees when open. Supporting text uses inverse muted colour; summary hover and dark-surface focus use inverse orange. Keep native keyboard activation rather than replacing it with a custom disclosure widget.

### Team entries

Open text articles, not raised cards: a top rule, top padding, a regular-weight name, a smaller role and a muted description. The desktop list is two columns and becomes a single column on mobile. There is no background fill, shadow or decorative icon.

### Contact circle

A circular orange email link with a diagonal arrow. Its base size is 130px, becoming 95px at the tablet breakpoint and 64px on mobile. Hover changes it to ink and rotates the circle 45 degrees; reduced motion retains the colour response but removes the rotation. Keep an accessible name when only the icon is visible.

### Shared accessibility and motion

Light-surface keyboard focus is a 2px accent outline with 6px offset. Dark service/footer surfaces use inverse orange instead. A skip link becomes visible on focus. Reduced-motion preference is handled in both CSS and JavaScript; content is never gated behind an entrance animation. No input, form, filter, modal or disabled/error-control system is implemented here.

## Do's and Don'ts

### Do:
- Do preserve the Light studio pairing of Geist and upright Instrument Serif.
- Do use the deeper action accent for white-labelled contact controls and the brighter signal for selection.
- Do present real product screenshots, preserving their legibility and aspect ratio in project galleries.
- Do retain fluid page edges, generous section space and single-column mobile layouts.
- Do preserve native disclosure semantics, visible keyboard focus and a readable no-JavaScript navigation fallback.
- Do disable ribbon drift, transitions and smooth scrolling when reduced motion is requested.

### Don't:
- Don't turn the page into a generic tech gradient or an equal icon-card grid.
- Don't replace real product imagery with decorative mock dashboards or fabricated metrics.
- Don't make Instrument Serif italic or use it as the body font.
- Don't round the project fields or apply card shadows to ordinary text sections.
- Don't use the brighter selection signal as a substitute for the deeper white-labelled action background.
- Don't introduce inputs, forms, filters or modal patterns as if they were part of this implemented system.

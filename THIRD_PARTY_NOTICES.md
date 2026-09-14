# Third-party notices

TriScribe is based in part on the MIT-licensed Handy project by CJ Pais and contributors:

- Source: https://github.com/cjpais/Handy
- License: MIT; the repository `LICENSE` file is retained.
- Handy's name, logo, and other original brand assets are not used as TriScribe branding.

Speech recognition and runtime components include:

- SenseVoice / FunAudioLLM: model code is published under MIT; model weights are distributed under the FunASR Model License Agreement 1.1. Review the model card and include the required attribution before commercial distribution.
- Silero VAD: local voice activity detection.
- OpenCC via `ferrous-opencc`: local Simplified/Traditional Chinese conversion.
- `transcribe-rs`, `transcribe-cpp`, Tauri, React, and their transitive dependencies under their respective licenses.
- Exact locked revisions of Tao, `hf-hub`, `rodio`, `vad-rs`, `rdev`, and `tauri-nspanel` are vendored under `vendor/` under their respective licenses. This keeps macOS/Windows builds reproducible and avoids runtime code drift.

This notice is an engineering inventory, not legal advice. A release build should include a generated dependency license report and the exact model-card/license versions shipped in that release.

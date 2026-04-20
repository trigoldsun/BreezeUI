// BreezeUI Design Tokens — Flutter (Generated)
// Date: 2026-04-20
// Output: Hermes01

import 'package:flutter/material.dart';

class BreezeTokens {
  // Colors — Background
  static const Color bgPrimary = Color(0xFFF8FAFE);
  static const Color bgSecondary = Color(0xFFEEF3FA);
  static const Color bgElevated = Color(0xFFFFFFFF);
  static const Color bgOverlay = Color(0xFFDDE5F0);
  static const Color bgInput = Color(0xFFF0F5FC);
  static const Color bgHover = Color(0xFFE8F0FB);
  static const Color bgActive = Color(0xFFDDE8F5);
  static const Color bgSubtle = Color(0xFFF5F8FE);

  // Colors — Accent
  static const Color accentPrimary = Color(0xFF4A9FFF);
  static const Color accentSecondary = Color(0xFF36D399);
  static const Color accentTertiary = Color(0xFFFF9F43);
  static const Color accentWarm = Color(0xFFFF6B9D);

  // Colors — Functional
  static const Color success = Color(0xFF22C55E);
  static const Color warning = Color(0xFFF59E0B);
  static const Color danger = Color(0xFFEF4444);
  static const Color info = Color(0xFF4A9FFF);

  // Colors — Pastel
  static const Color pastelBlue = Color(0xFFDBEAFE);
  static const Color pastelGreen = Color(0xFFD1FAE5);
  static const Color pastelOrange = Color(0xFFFEF3C7);
  static const Color pastelPink = Color(0xFFFCE7F3);
  static const Color pastelGray = Color(0xFFF1F5F9);

  // Colors — Text
  static const Color textPrimary = Color(0xFF1E3A5F);
  static const Color textSecondary = Color(0xFF5A7A9A);
  static const Color textTertiary = Color(0xFF94A8BE);
  static const Color textInverse = Color(0xFFFFFFFF);
  static const Color textLink = Color(0xFF4A9FFF);
  static const Color textMuted = Color(0xFF7C9AB8);

  // Colors — Border
  static Color borderDefault = const Color(0xFF4A9FFF).withValues(alpha: 0.15);
  static Color borderHover = const Color(0xFF4A9FFF).withValues(alpha: 0.4);
  static const Color borderFocus = Color(0xFF4A9FFF);

  // Typography
  static const String fontDisplay = 'Nunito';
  static const String fontBody = 'DM Sans';
  static const String fontMono = 'JetBrains Mono';

  // Spacing
  static const double space1 = 4.0;
  static const double space2 = 8.0;
  static const double space3 = 12.0;
  static const double space4 = 16.0;
  static const double space5 = 20.0;
  static const double space6 = 24.0;
  static const double space8 = 32.0;

  // Border Radius
  static const double radiusSm = 6.0;
  static const double radiusMd = 12.0;
  static const double radiusLg = 18.0;
  static const double radiusXl = 24.0;
  static const double radiusFull = 9999.0;

  // Duration
  static const Duration durationFast = Duration(milliseconds: 100);
  static const Duration durationNormal = Duration(milliseconds: 180);
  static const Duration durationSlow = Duration(milliseconds: 280);

  // Elevation / Shadow
  static List<BoxShadow> shadowSm = [
    BoxShadow(color: const Color(0xFF1E3A5F).withValues(alpha: 0.08), blurRadius: 6, offset: const Offset(0, 2)),
  ];
  static List<BoxShadow> shadowMd = [
    BoxShadow(color: const Color(0xFF1E3A5F).withValues(alpha: 0.1), blurRadius: 16, offset: const Offset(0, 4)),
  ];
  static List<BoxShadow> shadowLg = [
    BoxShadow(color: const Color(0xFF1E3A5F).withValues(alpha: 0.12), blurRadius: 28, offset: const Offset(0, 8)),
  ];
}

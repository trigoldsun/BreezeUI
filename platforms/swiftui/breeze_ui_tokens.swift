// BreezeUI Design Tokens — SwiftUI (Generated)
// Date: 2026-04-20
// Output: Hermes01

import SwiftUI

enum BreezeTokens {
    // MARK: — Colors
    enum Colors {
        static let bgPrimary = Color(hex: "F8FAFE")
        static let bgSecondary = Color(hex: "EEF3FA")
        static let bgElevated = Color.white
        static let bgOverlay = Color(hex: "DDE5F0")
        static let bgInput = Color(hex: "F0F5FC")
        static let bgHover = Color(hex: "E8F0FB")
        static let bgActive = Color(hex: "DDE8F5")
        static let bgSubtle = Color(hex: "F5F8FE")
        
        static let accentPrimary = Color(hex: "4A9FFF")
        static let accentSecondary = Color(hex: "36D399")
        static let accentTertiary = Color(hex: "FF9F43")
        static let accentWarm = Color(hex: "FF6B9D")
        
        static let success = Color(hex: "22C55E")
        static let warning = Color(hex: "F59E0B")
        static let danger = Color(hex: "EF4444")
        static let info = Color(hex: "4A9FFF")
        
        static let pastelBlue = Color(hex: "DBEAFE")
        static let pastelGreen = Color(hex: "D1FAE5")
        static let pastelOrange = Color(hex: "FEF3C7")
        static let pastelPink = Color(hex: "FCE7F3")
        static let pastelGray = Color(hex: "F1F5F9")
        
        static let textPrimary = Color(hex: "1E3A5F")
        static let textSecondary = Color(hex: "5A7A9A")
        static let textTertiary = Color(hex: "94A8BE")
        static let textInverse = Color.white
        static let textLink = Color(hex: "4A9FFF")
        static let textMuted = Color(hex: "7C9AB8")
    }
    
    // MARK: — Typography
    enum Typography {
        static let fontDisplay = "Nunito"
        static let fontBody = "DM Sans"
        static let fontMono = "JetBrains Mono"
    }
    
    // MARK: — Spacing
    enum Spacing {
        static let unit: CGFloat = 4
        static let space1 = unit * 1   // 4
        static let space2 = unit * 2   // 8
        static let space3 = unit * 3  // 12
        static let space4 = unit * 4  // 16
        static let space5 = unit * 5  // 20
        static let space6 = unit * 6  // 24
        static let space8 = unit * 8  // 32
    }
    
    // MARK: — Border Radius
    enum Radius {
        static let sm: CGFloat = 6
        static let md: CGFloat = 12
        static let lg: CGFloat = 18
        static let xl: CGFloat = 24
        static let full: CGFloat = 9999
    }
    
    // MARK: — Duration
    enum Duration {
        static let fast: Double = 0.1
        static let normal: Double = 0.18
        static let slow: Double = 0.28
    }
}

extension Color {
    init(hex: String) {
        let hex = hex.trimmingCharacters(in: CharacterSet.alphanumerics.inverted)
        var int: UInt64 = 0
        Scanner(string: hex).scanHexInt64(&int)
        let a, r, g, b: UInt64
        switch hex.count {
        case 3:
            (a, r, g, b) = (255, (int >> 8) * 17, (int >> 4 & 0xF) * 17, (int & 0xF) * 17)
        case 6:
            (a, r, g, b) = (255, int >> 16, int >> 8 & 0xFF, int & 0xFF)
        case 8:
            (a, r, g, b) = (int >> 24, int >> 16 & 0xFF, int >> 8 & 0xFF, int & 0xFF)
        default:
            (a, r, g, b) = (255, 0, 0, 0)
        }
        self.init(.sRGB, red: Double(r) / 255, green: Double(g) / 255, blue: Double(b) / 255, opacity: Double(a) / 255)
    }
}

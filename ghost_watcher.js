// ghost_watcher.js - The Orb Empire Remote Link
const { exec } = require('child_process');

console.log("👁️  GHOST PROTOCOL AKTIF: Menunggu arahan Sovereign...");

// Kita check GitHub setiap 10 saat
setInterval(() => {
    exec('git fetch origin', (err) => {
        if (err) return;
        exec('git status -uno', (err, stdout) => {
            if (stdout.includes('Your branch is behind')) {
                console.log("🔥 ARAHAN DITERIMA! Executing update...");
                exec('git pull', (err, stdout) => {
                    console.log(err ? "❌ Gagal:" + err : "✅ SUCCESS: " + stdout);
                });
            }
        });
    });
}, 10000);

        // Función para crear confeti
        function createConfetti() {
            const colors = ['#d4a5ff', '#c68cff', '#b85dff', '#ff006e', '#8338ec'];
            
            for (let i = 0; i < 50; i++) {
                const confetti = document.createElement('div');
                confetti.classList.add('confetti');
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.delay = Math.random() * 0.5 + 's';
                confetti.style.duration = (Math.random() * 2 + 2) + 's';
                
                document.body.appendChild(confetti);
                
                setTimeout(() => confetti.remove(), 3500);
            }

            // Crear chispas
            createSparkles();

            // Efecto de vibración (si es compatible)
            if (navigator.vibrate) {
                navigator.vibrate([100, 50, 100]);
            }
        }

        // Función para crear chispas flotantes
        function createSparkles() {
            const card = document.querySelector('.card');
            const rect = card.getBoundingClientRect();

            for (let i = 0; i < 20; i++) {
                const sparkle = document.createElement('div');
                sparkle.classList.add('sparkle');
                sparkle.style.left = (Math.random() * rect.width) + 'px';
                sparkle.style.top = (Math.random() * rect.height) + 'px';
                
                const angle = (Math.random() * Math.PI * 2);
                const distance = Math.random() * 100 + 50;
                sparkle.style.setProperty('--tx', Math.cos(angle) * distance + 'px');
                
                card.appendChild(sparkle);
                
                setTimeout(() => sparkle.classList.add('active'), 0);
                setTimeout(() => sparkle.remove(), 1500);
            }
        }

        // Funciones del modal
        function openMessage() {
            document.getElementById('messageModal').style.display = 'block';
            createSparkles();
        }

        function closeMessage() {
            document.getElementById('messageModal').style.display = 'none';
        }

        // Cerrar modal al hacer click fuera
        window.onclick = function(event) {
            const modal = document.getElementById('messageModal');
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        }

        // Animación de entrada al cargar
        window.addEventListener('load', function() {
            createSparkles();
            
            // Efecto de chispas cada 4 segundos
            setInterval(createSparkles, 4000);
        });

        // Sonido de click (opcional - comentado para no abusar)
        function playSound() {
            // Descomenta si quieres agregar sonido
            // const audio = new Audio('data:audio/wav;base64,...');
            // audio.play();
        }

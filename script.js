document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    
    // Initial animation
    setTimeout(() => {
        container.style.transition = 'opacity 1s ease-in-out, transform 1s ease-in-out';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 500);

    // Video container hover effect
    const videoContainer = document.querySelector('.video-container');
    
    videoContainer.addEventListener('mouseenter', () => {
        videoContainer.style.transform = 'scale(1.02)';
        videoContainer.style.transition = 'transform 0.3s ease-in-out';
    });

    videoContainer.addEventListener('mouseleave', () => {
        videoContainer.style.transform = 'scale(1)';
    });
});
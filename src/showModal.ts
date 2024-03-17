class Modal {
  private modalElement: HTMLElement;
  private overlayElement: HTMLElement;
  private titleElement: HTMLElement;
  private descriptionElement: HTMLElement;
  private closeButton: HTMLButtonElement;

  constructor() {
    // Create overlay element
    this.overlayElement = document.createElement('div');
    this.overlayElement.classList.add('overlay');
    document.body.appendChild(this.overlayElement);
    // Apply styles to overlay element
    this.overlayElement.style.position = 'fixed';
    this.overlayElement.style.top = '0';
    this.overlayElement.style.left = '0';
    this.overlayElement.style.width = '100%';
    this.overlayElement.style.height = '100%';
    this.overlayElement.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // semi-transparent black

    // Create modal element
    this.modalElement = document.createElement('div');
    this.modalElement.classList.add('modal');
    document.body.appendChild(this.modalElement);
    // Apply styles to modal element
    this.modalElement.style.position = 'fixed';
    this.modalElement.style.top = '50%';
    this.modalElement.style.left = '50%';
    this.modalElement.style.transform = 'translate(-50%, -50%)';
    this.modalElement.style.backgroundColor = '#fff'; // white background
    this.modalElement.style.padding = '20px';
    this.modalElement.style.borderRadius = '5px';

    // Create title element
    this.titleElement = document.createElement('h2');
    this.titleElement.classList.add('modal-title');
    this.modalElement.appendChild(this.titleElement);

    // Create description element
    this.descriptionElement = document.createElement('p');
    this.descriptionElement.classList.add('modal-description');
    this.modalElement.appendChild(this.descriptionElement);

    // Create close button
    this.closeButton = document.createElement('button');
    this.closeButton.textContent = 'X';
    this.closeButton.classList.add('modal-close-button');
    this.modalElement.appendChild(this.closeButton);

    // Add event listener to close button
    this.closeButton.addEventListener('click', () => {
      this.hideModal();
    });
  }

  // Method to show the modal with provided title and description
  showModal(title: string, description: string): void {
    this.titleElement.textContent = title;
    this.descriptionElement.textContent = description;
    this.overlayElement.style.display = 'block';
    this.modalElement.style.display = 'block';
  }

  // Method to hide the modal
  hideModal(): void {
    this.overlayElement.style.display = 'none';
    this.modalElement.style.display = 'none';
  }
}

export function triggerModal(title: string, description: string): void {
  const modal = new Modal();
  modal.showModal(title, description);
}

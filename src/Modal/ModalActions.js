import React from "react";
import PropTypes from "prop-types";
import Button from '../Button';
import styles from "./Modal.module.scss";

const ModalActions = ({
  onConfirmClick,
  confirmLabel,
  closeModal,
  cancelLabel,
}) => (
  <div className={styles.actions}>
    <Button
      border
      className={styles.btnCancel}
      accent="negative"
      onClick={closeModal}
    >
      {cancelLabel}
    </Button>
    {onConfirmClick && (
      <Button
        variant="fill"
        accent="positive"
        onClick={e => onConfirmClick(e, closeModal)}
      >
        {confirmLabel}
      </Button>
    )}
  </div>
)

ModalActions.defaultProps = {
  confirmLabel: 'Confirm',
  cancelLabel: 'Cancel',
};

ModalActions.propTypes = {
  onConfirmClick: PropTypes.func,
  closeModal: PropTypes.func.isRequired,
  confirmLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
};

export default ModalActions

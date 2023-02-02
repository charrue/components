import { ref, h, VNode } from "vue";
import { ElDialog, DialogProps } from "element-plus";

type CreateElDialogOptions = Partial<Omit<DialogProps, "modelValue">>;
const elDialogDefaultProps: CreateElDialogOptions = {
  appendToBody: false,
  destroyOnClose: false,
  closeOnClickModal: true,
  closeOnPressEscape: true,
  lockScroll: true,
  modal: true,
  openDelay: 0,
  closeDelay: 0,
  trapFocus: false,
};

type CreateElDialogEvents = Partial<{
  onOpen: () => void;
  opOpened: () => void;
  onClose: () => () => void;
  onOpenAutoFocus: () => () => void;
  onCloseAutoFocus: () => () => void;
}>;

export const createElDialog = (
  NestedComponent: any,
  dialogProps: CreateElDialogOptions = elDialogDefaultProps,
  dialogEvents: CreateElDialogEvents = {},
): [
    () => VNode,
    {
      toggle: () => void;
      open: () => void;
      close: () => void;
    }
  ] => {
  const dialogPropsWithDefaults = Object.assign(elDialogDefaultProps, dialogProps);
  const visible = ref(false);

  const toggle = () => {
    visible.value = !visible.value;
  };
  const open = () => {
    visible.value = true;
  };
  const close = () => {
    visible.value = false;
  };

  const DialogComponent = () => h(ElDialog, {
    modelValue: visible.value,
    ...dialogPropsWithDefaults,
    ...dialogEvents,
    "onUpdate:modelValue": toggle,
  }, {
    default: () => h(NestedComponent),
  });

  return [
    DialogComponent, {
      toggle,
      open,
      close,
    },
  ];
};

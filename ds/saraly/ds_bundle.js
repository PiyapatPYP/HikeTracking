/* @ds-bundle: {"format":4,"namespace":"SaralyDesignSystem_019e00","components":[{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Badge","sourcePath":"components/data/Badge.jsx"},{"name":"StatCard","sourcePath":"components/data/StatCard.jsx"},{"name":"Table","sourcePath":"components/data/Table.jsx"},{"name":"Tag","sourcePath":"components/data/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"SidebarNav","sourcePath":"components/navigation/SidebarNav.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Card.jsx":"04e6c84e39de","components/data/Badge.jsx":"be419f929ea7","components/data/StatCard.jsx":"60a4e54b72aa","components/data/Table.jsx":"e28486b07a06","components/data/Tag.jsx":"239a1294df4b","components/feedback/Dialog.jsx":"4537c77191f3","components/feedback/Toast.jsx":"223e44c438ad","components/forms/Button.jsx":"a8c7d5a4614c","components/forms/Checkbox.jsx":"d70e38d26764","components/forms/Input.jsx":"099eac7d2e1b","components/forms/Select.jsx":"4666f4f0f908","components/forms/Switch.jsx":"5bc8a6e36ab2","components/navigation/SidebarNav.jsx":"58d51b00cf5c","components/navigation/Tabs.jsx":"483ddf8a56ef","ui_kits/dashboard/AttendanceScreen.jsx":"fe51d6ac4122","ui_kits/dashboard/DashboardScreen.jsx":"d38f19913ea0","ui_kits/dashboard/EmployeesScreen.jsx":"a79e62138007","ui_kits/dashboard/PayrollRunsScreen.jsx":"326cf1f22bbf","ui_kits/dashboard/SettingsScreen.jsx":"9460c7d98090"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SaralyDesignSystem_019e00 = window.SaralyDesignSystem_019e00 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Card.jsx
try { (() => {
function Card({
  children,
  padding = '24px'
}) {
  return React.createElement('div', {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      padding,
      fontFamily: 'var(--font-body)'
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/data/Badge.jsx
try { (() => {
function Badge({
  tone = 'neutral',
  children
}) {
  const tones = {
    neutral: {
      background: 'var(--surface-sunken)',
      color: 'var(--text-secondary)'
    },
    success: {
      background: 'var(--semantic-success-tint)',
      color: 'var(--semantic-success)'
    },
    warning: {
      background: 'var(--semantic-warning-tint)',
      color: 'var(--semantic-warning)'
    },
    danger: {
      background: 'var(--semantic-danger-tint)',
      color: 'var(--semantic-danger)'
    },
    monthly: {
      background: 'var(--payroll-monthly-tint)',
      color: 'var(--payroll-monthly)'
    },
    daily: {
      background: 'var(--payroll-daily-tint)',
      color: 'var(--payroll-daily)'
    }
  };
  return React.createElement('span', {
    style: {
      ...tones[tone],
      padding: '4px 12px',
      borderRadius: 'var(--radius-full)',
      fontSize: 'var(--text-xs)',
      fontWeight: 600,
      fontFamily: 'var(--font-body)',
      display: 'inline-block'
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data/StatCard.jsx
try { (() => {
function StatCard({
  label,
  value,
  delta,
  tone = 'neutral'
}) {
  const deltaColor = tone === 'success' ? 'var(--semantic-success)' : tone === 'danger' ? 'var(--semantic-danger)' : 'var(--text-muted)';
  return React.createElement('div', {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      padding: '20px',
      fontFamily: 'var(--font-body)',
      minWidth: 180
    }
  }, React.createElement('div', {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)',
      marginBottom: 8
    }
  }, label), React.createElement('div', {
    style: {
      fontSize: 'var(--text-2xl)',
      fontWeight: 700,
      color: 'var(--text-primary)'
    }
  }, value), delta && React.createElement('div', {
    style: {
      fontSize: 'var(--text-xs)',
      color: deltaColor,
      marginTop: 6,
      fontWeight: 600
    }
  }, delta));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/data/Table.jsx
try { (() => {
function Table({
  columns = [],
  rows = []
}) {
  const th = {
    textAlign: 'left',
    padding: '10px 16px',
    fontSize: 'var(--text-sm)',
    fontWeight: 600,
    color: 'var(--text-secondary)',
    background: 'var(--surface-sunken)',
    borderBottom: '1px solid var(--border-subtle)'
  };
  const td = {
    padding: '12px 16px',
    fontSize: 'var(--text-base)',
    color: 'var(--text-primary)',
    borderBottom: '1px solid var(--border-subtle)'
  };
  return React.createElement('table', {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--font-body)',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden'
    }
  }, React.createElement('thead', null, React.createElement('tr', null, columns.map((c, i) => React.createElement('th', {
    key: i,
    style: th
  }, c)))), React.createElement('tbody', null, rows.map((r, i) => React.createElement('tr', {
    key: i
  }, r.map((cell, j) => React.createElement('td', {
    key: j,
    style: td
  }, cell))))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Table.jsx", error: String((e && e.message) || e) }); }

// components/data/Tag.jsx
try { (() => {
function Tag({
  children,
  onRemove
}) {
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      background: 'var(--surface-sunken)',
      border: '1px solid var(--border-subtle)',
      color: 'var(--text-primary)',
      padding: '4px 10px',
      borderRadius: 'var(--radius-full)',
      fontSize: 'var(--text-sm)',
      fontFamily: 'var(--font-body)'
    }
  }, children, onRemove && React.createElement('span', {
    onClick: onRemove,
    style: {
      cursor: 'pointer',
      color: 'var(--text-muted)',
      fontWeight: 700
    }
  }, '×'));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  children,
  onClose
}) {
  if (!open) return null;
  return React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(43,36,29,0.4)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10
    }
  }, React.createElement('div', {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      padding: '24px',
      minWidth: 320,
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16
    }
  }, React.createElement('h3', {
    style: {
      margin: 0,
      fontSize: 'var(--text-lg)',
      fontWeight: 700,
      color: 'var(--text-primary)'
    }
  }, title), React.createElement('span', {
    onClick: onClose,
    style: {
      cursor: 'pointer',
      color: 'var(--text-muted)',
      fontSize: 20
    }
  }, '×')), children));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  tone = 'success',
  children
}) {
  const tones = {
    success: {
      background: 'var(--semantic-success)'
    },
    danger: {
      background: 'var(--semantic-danger)'
    },
    info: {
      background: 'var(--semantic-info)'
    }
  };
  return React.createElement('div', {
    style: {
      ...tones[tone],
      color: '#fff',
      padding: '12px 20px',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-md)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 500,
      display: 'inline-block'
    }
  }, children);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  onClick
}) {
  const sizes = {
    sm: {
      padding: '6px 14px',
      fontSize: 'var(--text-sm)'
    },
    md: {
      padding: '10px 20px',
      fontSize: 'var(--text-base)'
    },
    lg: {
      padding: '14px 28px',
      fontSize: 'var(--text-md)'
    }
  };
  const base = {
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    borderRadius: 'var(--radius-full)',
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'background var(--duration-fast) var(--ease-standard), transform var(--duration-fast)',
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: 'var(--brand-primary)',
      color: '#fff'
    },
    secondary: {
      background: 'var(--brand-secondary)',
      color: '#fff'
    },
    outline: {
      background: 'transparent',
      color: 'var(--brand-primary)',
      borderColor: 'var(--brand-primary)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-primary)'
    },
    danger: {
      background: 'var(--semantic-danger)',
      color: '#fff'
    }
  };
  return React.createElement('button', {
    style: {
      ...base,
      ...variants[variant]
    },
    disabled,
    onClick,
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-primary)',
      cursor: 'pointer'
    }
  }, React.createElement('input', {
    type: 'checkbox',
    checked,
    onChange,
    style: {
      width: 18,
      height: 18,
      accentColor: 'var(--brand-primary)'
    }
  }), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  error,
  suffix
}) {
  const wrap = {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    fontFamily: 'var(--font-body)'
  };
  const box = {
    display: 'flex',
    alignItems: 'center',
    border: `1px solid ${error ? 'var(--semantic-danger)' : 'var(--border-default)'}`,
    borderRadius: 'var(--radius-md)',
    background: 'var(--surface-card)',
    padding: '0 12px'
  };
  const inp = {
    flex: 1,
    border: 'none',
    outline: 'none',
    padding: '10px 0',
    fontSize: 'var(--text-base)',
    fontFamily: 'var(--font-body)',
    background: 'transparent',
    color: 'var(--text-primary)'
  };
  return React.createElement('div', {
    style: wrap
  }, label && React.createElement('label', {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 500,
      color: 'var(--text-secondary)'
    }
  }, label), React.createElement('div', {
    style: box
  }, React.createElement('input', {
    style: inp,
    type,
    placeholder,
    value,
    onChange
  }), suffix && React.createElement('span', {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, suffix)), error && React.createElement('span', {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--semantic-danger)'
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontFamily: 'var(--font-body)'
    }
  }, label && React.createElement('label', {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 500,
      color: 'var(--text-secondary)'
    }
  }, label), React.createElement('select', {
    value,
    onChange,
    style: {
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      padding: '10px 12px',
      fontSize: 'var(--text-base)',
      fontFamily: 'var(--font-body)',
      color: 'var(--text-primary)',
      background: 'var(--surface-card)'
    }
  }, options.map((o, i) => React.createElement('option', {
    key: i,
    value: o.value
  }, o.label))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  onChange,
  label
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('span', {
    onClick: () => onChange && onChange(!checked),
    style: {
      width: 40,
      height: 22,
      borderRadius: 'var(--radius-full)',
      background: checked ? 'var(--brand-primary)' : 'var(--border-default)',
      position: 'relative',
      transition: 'background var(--duration-normal) var(--ease-standard)'
    }
  }, React.createElement('span', {
    style: {
      position: 'absolute',
      top: 2,
      left: checked ? 20 : 2,
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: '#fff',
      transition: 'left var(--duration-normal) var(--ease-standard)',
      boxShadow: 'var(--shadow-sm)'
    }
  })), label && React.createElement('span', {
    style: {
      fontSize: 'var(--text-base)',
      color: 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SidebarNav.jsx
try { (() => {
function SidebarNav({
  items = [],
  active,
  onSelect
}) {
  return React.createElement('nav', {
    style: {
      width: 220,
      background: 'var(--surface-inverse)',
      height: '100%',
      padding: '16px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
      fontFamily: 'var(--font-body)'
    }
  }, items.map((it, i) => React.createElement('div', {
    key: i,
    onClick: () => onSelect && onSelect(it.value),
    style: {
      padding: '10px 14px',
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      fontSize: 'var(--text-base)',
      fontWeight: 500,
      color: active === it.value ? '#fff' : 'var(--color-cream-300)',
      background: active === it.value ? 'var(--brand-primary)' : 'transparent'
    }
  }, it.label)));
}
Object.assign(__ds_scope, { SidebarNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SidebarNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  active,
  onChange
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: '4px',
      borderBottom: '1px solid var(--border-subtle)',
      fontFamily: 'var(--font-body)'
    }
  }, tabs.map((t, i) => React.createElement('div', {
    key: i,
    onClick: () => onChange && onChange(t.value),
    style: {
      padding: '10px 18px',
      fontSize: 'var(--text-base)',
      fontWeight: 600,
      cursor: 'pointer',
      color: active === t.value ? 'var(--brand-primary)' : 'var(--text-secondary)',
      borderBottom: active === t.value ? '2px solid var(--brand-primary)' : '2px solid transparent'
    }
  }, t.label)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/AttendanceScreen.jsx
try { (() => {
function AttendanceScreen() {
  const {
    Card,
    Button,
    Select,
    Badge
  } = window.SaralyDesignSystem_019e00;
  const days = Array.from({
    length: 31
  }, (_, i) => i + 1);
  const marks = {
    5: 'holiday',
    12: 'full',
    13: 'half',
    20: 'holiday'
  };
  const dayStyle = d => {
    const base = {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-sm)',
      fontSize: 'var(--text-sm)',
      fontFamily: 'var(--font-body)'
    };
    if (marks[d] === 'holiday') return {
      ...base,
      background: 'var(--semantic-danger-tint)',
      color: 'var(--semantic-danger)',
      fontWeight: 600
    };
    if (marks[d] === 'full') return {
      ...base,
      background: 'var(--semantic-warning-tint)',
      color: 'var(--semantic-warning)',
      fontWeight: 600
    };
    if (marks[d] === 'half') return {
      ...base,
      background: 'var(--brand-primary-tint)',
      color: 'var(--brand-primary)',
      fontWeight: 600
    };
    return {
      ...base,
      color: 'var(--text-secondary)'
    };
  };
  return React.createElement('div', null, React.createElement('div', {
    style: {
      fontSize: 'var(--text-xl)',
      fontWeight: 700,
      fontFamily: 'var(--font-body)',
      color: 'var(--text-primary)',
      marginBottom: 16
    }
  }, 'ลงเวลาทำงาน'), React.createElement(Card, null, React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, 'นำเข้าข้อมูลวันทำงานจาก Excel'), React.createElement(Button, {
    variant: 'secondary',
    size: 'sm'
  }, '⬆ อัปโหลดไฟล์ .xlsx')), React.createElement('div', {
    style: {
      border: '2px dashed var(--border-default)',
      borderRadius: 'var(--radius-md)',
      padding: '28px',
      textAlign: 'center',
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)'
    }
  }, 'ลากไฟล์มาวาง หรือคลิกเพื่อเลือกไฟล์')), React.createElement('div', {
    style: {
      marginTop: 20,
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, 'สิงหาคม 2569'), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 12,
      margin: '10px 0 16px',
      fontSize: 'var(--text-xs)',
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement(Badge, {
    tone: 'danger'
  }, 'วันหยุด'), React.createElement(Badge, {
    tone: 'warning'
  }, 'ลาเต็มวัน'), React.createElement(Badge, {
    tone: 'monthly'
  }, 'ลาครึ่งวัน')), React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(10,1fr)',
      gap: 8,
      maxWidth: 480
    }
  }, days.map(d => React.createElement('div', {
    key: d,
    style: dayStyle(d)
  }, d))));
}
window.AttendanceScreen = AttendanceScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/AttendanceScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/DashboardScreen.jsx
try { (() => {
function DashboardScreen() {
  const {
    StatCard,
    Table,
    Badge,
    Card
  } = window.SaralyDesignSystem_019e00;
  const s = {
    h: {
      fontSize: 'var(--text-xl)',
      fontWeight: 700,
      color: 'var(--text-primary)',
      marginBottom: 20,
      fontFamily: 'var(--font-body)'
    },
    sub: {
      fontSize: 'var(--text-md)',
      fontWeight: 600,
      color: 'var(--text-primary)',
      margin: '28px 0 12px',
      fontFamily: 'var(--font-body)'
    }
  };
  return React.createElement('div', null, React.createElement('div', {
    style: s.h
  }, 'ภาพรวม'), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, React.createElement(StatCard, {
    label: 'ยอดจ่ายรอบนี้',
    value: '฿482,300',
    delta: '+4.2% จากรอบก่อน',
    tone: 'success'
  }), React.createElement(StatCard, {
    label: 'พนักงานทั้งหมด',
    value: '86 คน'
  }), React.createElement(StatCard, {
    label: 'รอนำเข้าข้อมูลวันทำงาน',
    value: '3 แผนก',
    tone: 'danger'
  }), React.createElement(StatCard, {
    label: 'เงินยืมค้างหัก',
    value: '฿24,500'
  })), React.createElement('div', {
    style: s.sub
  }, 'รอบจ่ายเงินล่าสุด'), React.createElement(Table, {
    columns: ['รอบจ่ายเงิน', 'ประเภท', 'จำนวนคน', 'ยอดรวม', 'สถานะ'],
    rows: [['1–15 ส.ค. 2569', React.createElement(Badge, {
      tone: 'daily'
    }, 'รายวัน'), '54', '฿186,200', React.createElement(Badge, {
      tone: 'success'
    }, 'จ่ายแล้ว')], ['ส.ค. 2569 (รายเดือน)', React.createElement(Badge, {
      tone: 'monthly'
    }, 'รายเดือน'), '32', '฿296,100', React.createElement(Badge, {
      tone: 'success'
    }, 'จ่ายแล้ว')], ['16–31 ส.ค. 2569', React.createElement(Badge, {
      tone: 'daily'
    }, 'รายวัน'), '54', '—', React.createElement(Badge, {
      tone: 'warning'
    }, 'รอตรวจสอบ')]]
  }));
}
window.DashboardScreen = DashboardScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/DashboardScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/EmployeesScreen.jsx
try { (() => {
function EmployeesScreen() {
  const {
    Tabs,
    Table,
    Badge,
    Input,
    Button
  } = window.SaralyDesignSystem_019e00;
  const [tab, setTab] = React.useState('daily');
  const monthly = [['วิภา พงษ์', 'ฝ่ายบัญชี', '฿18,000/เดือน', React.createElement(Badge, {
    tone: 'success'
  }, 'ปกติ')], ['อรุณ ศรีทอง', 'ฝ่ายขาย', '฿22,000/เดือน', React.createElement(Badge, {
    tone: 'success'
  }, 'ปกติ')]];
  const daily = [['สมชาย ใจดี', 'ฝ่ายผลิต', '฿450/วัน', React.createElement(Badge, {
    tone: 'success'
  }, 'ปกติ')], ['มานะ พรมมา', 'ฝ่ายผลิต', '฿420/วัน', React.createElement(Badge, {
    tone: 'warning'
  }, 'ลาครึ่งวัน')], ['สุดา แก้วมณี', 'คลังสินค้า', '฿400/วัน', React.createElement(Badge, {
    tone: 'success'
  }, 'ปกติ')]];
  return React.createElement('div', null, React.createElement('div', {
    style: {
      fontSize: 'var(--text-xl)',
      fontWeight: 700,
      fontFamily: 'var(--font-body)',
      color: 'var(--text-primary)',
      marginBottom: 16
    }
  }, 'พนักงาน'), React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 12
    }
  }, React.createElement(Tabs, {
    tabs: [{
      label: 'รายวัน',
      value: 'daily'
    }, {
      label: 'รายเดือน',
      value: 'monthly'
    }],
    active: tab,
    onChange: setTab
  }), React.createElement(Button, {
    variant: 'primary',
    size: 'sm'
  }, '+ เพิ่มพนักงาน')), React.createElement(Table, {
    columns: ['ชื่อ', 'แผนก', 'อัตราค่าแรง', 'สถานะ'],
    rows: tab === 'daily' ? daily : monthly
  }));
}
window.EmployeesScreen = EmployeesScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/EmployeesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/PayrollRunsScreen.jsx
try { (() => {
function PayrollRunsScreen() {
  const {
    Card,
    Button,
    Badge,
    Table,
    Dialog
  } = window.SaralyDesignSystem_019e00;
  const [open, setOpen] = React.useState(false);
  return React.createElement('div', null, React.createElement('div', {
    style: {
      fontSize: 'var(--text-xl)',
      fontWeight: 700,
      fontFamily: 'var(--font-body)',
      color: 'var(--text-primary)',
      marginBottom: 16
    }
  }, 'รอบจ่ายเงิน'), React.createElement(Card, null, React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('div', {
    style: {
      fontWeight: 600,
      color: 'var(--text-primary)',
      marginBottom: 4
    }
  }, 'รอบวันที่ 16–31 สิงหาคม 2569 (รายวัน)'), React.createElement('div', {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)'
    }
  }, '54 คน · ตัดรอบทุกวันที่ 15 และสิ้นเดือน')), React.createElement(Button, {
    variant: 'primary',
    onClick: () => setOpen(true)
  }, 'คำนวณและยืนยันจ่าย'))), React.createElement('div', {
    style: {
      marginTop: 20,
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, 'รายการหักเงินยืม / เบิกล่วงหน้า'), React.createElement(Table, {
    columns: ['พนักงาน', 'ประเภท', 'ยอดเบิก', 'หักงวดนี้', 'คงเหลือ'],
    rows: [['สมชาย ใจดี', 'เบิกล่วงหน้า', '฿3,000', '฿1,000', '฿2,000'], ['มานะ พรมมา', 'เงินยืม', '฿5,000', '฿1,000', '฿3,000']]
  }), React.createElement(Dialog, {
    open,
    title: 'ยืนยันการจ่ายเงินเดือน',
    onClose: () => setOpen(false)
  }, React.createElement('p', {
    style: {
      color: 'var(--text-secondary)',
      fontFamily: 'var(--font-body)',
      maxWidth: 280
    }
  }, 'ยืนยันจ่ายเงินรอบ 16–31 สิงหาคม ให้พนักงาน 54 คน รวม ฿198,400 (หักเงินยืมแล้ว)?'), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 8,
      justifyContent: 'flex-end',
      marginTop: 16
    }
  }, React.createElement(Button, {
    variant: 'ghost',
    onClick: () => setOpen(false)
  }, 'ยกเลิก'), React.createElement(Button, {
    variant: 'primary',
    onClick: () => setOpen(false)
  }, 'ยืนยัน'))));
}
window.PayrollRunsScreen = PayrollRunsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/PayrollRunsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/SettingsScreen.jsx
try { (() => {
function SettingsScreen() {
  const {
    Card,
    Switch,
    Input,
    Select,
    Button
  } = window.SaralyDesignSystem_019e00;
  const [auto, setAuto] = React.useState(true);
  return React.createElement('div', null, React.createElement('div', {
    style: {
      fontSize: 'var(--text-xl)',
      fontWeight: 700,
      fontFamily: 'var(--font-body)',
      color: 'var(--text-primary)',
      marginBottom: 16
    }
  }, 'ตั้งค่า'), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      maxWidth: 440
    }
  }, React.createElement(Card, null, React.createElement('div', {
    style: {
      fontWeight: 600,
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-body)',
      marginBottom: 12
    }
  }, 'รอบการจ่ายเงิน (รายวัน)'), React.createElement(Select, {
    label: 'ตัดรอบเงินเดือน',
    options: [{
      label: 'ทุกวันที่ 15 และสิ้นเดือน',
      value: '15'
    }, {
      label: 'สิ้นเดือนเท่านั้น',
      value: 'eom'
    }]
  })), React.createElement(Card, null, React.createElement('div', {
    style: {
      fontWeight: 600,
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-body)',
      marginBottom: 12
    }
  }, 'เงินยืม / เบิกล่วงหน้า'), React.createElement(Switch, {
    checked: auto,
    onChange: setAuto,
    label: 'หักเงินยืมอัตโนมัติจากรอบจ่ายถัดไป'
  })), React.createElement(Card, null, React.createElement('div', {
    style: {
      fontWeight: 600,
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-body)',
      marginBottom: 12
    }
  }, 'วันหยุดประจำปี'), React.createElement(Input, {
    label: 'เพิ่มวันหยุด',
    type: 'date'
  })), React.createElement(Button, {
    variant: 'primary'
  }, 'บันทึกการตั้งค่า')));
}
window.SettingsScreen = SettingsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/SettingsScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.SidebarNav = __ds_scope.SidebarNav;

__ds_ns.Tabs = __ds_scope.Tabs;

})();

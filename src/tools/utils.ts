export var validatemobile = function (mobile) {
  if (mobile.length === 0) {
    alert('请输入手机号码！');
    return false;
  }
  if (mobile.length !== 11) {
    alert('手机号长度不正确！');
    return false;
  }

  var myreg = /^(1[358][0-9]{9})$/;
  if (!myreg.test(mobile)) {
    alert('请输入有效的手机号码！');
    return false;
  }
  return true;
};

import { Vector3, Matrix4, Math as Math$1, Color, Object3D, ConeBufferGeometry, Mesh, MeshBasicMaterial, AxesHelper } from 'three';

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), Object.defineProperty(e, "prototype", {
    writable: false
  }), e;
}
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e) {
      t && (r = t);
      var n = 0,
        F = function () {};
      return {
        s: F,
        n: function () {
          return n >= r.length ? {
            done: true
          } : {
            done: false,
            value: r[n++]
          };
        },
        e: function (r) {
          throw r;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o,
    a = true,
    u = false;
  return {
    s: function () {
      t = t.call(r);
    },
    n: function () {
      var r = t.next();
      return a = r.done, r;
    },
    e: function (r) {
      u = true, o = r;
    },
    f: function () {
      try {
        a || null == t.return || t.return();
      } finally {
        if (u) throw o;
      }
    }
  };
}
function _get() {
  return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) {
    var p = _superPropBase(e, t);
    if (p) {
      var n = Object.getOwnPropertyDescriptor(p, t);
      return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
    }
  }, _get.apply(null, arguments);
}
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: true,
      configurable: true
    }
  }), Object.defineProperty(t, "prototype", {
    writable: false
  }), e && _setPrototypeOf(t, e);
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function () {
    return !!t;
  })();
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = true,
      o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = true, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == typeof e || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _superPropBase(t, o) {
  for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t)););
  return t;
}
function _superPropGet(t, o, e, r) {
  var p = _get(_getPrototypeOf(t.prototype ), o, e);
  return "function" == typeof p ? function (t) {
    return p.apply(e, t);
  } : p;
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (String )(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

/**
 * A collection of utilities.
 * @module utils
 */

var t1 = new Vector3();
var t2 = new Vector3();
var t3 = new Vector3();
var m1 = new Matrix4();

/**
 * Returns the world position of object and sets
 * it on target.
 *
 * @param {THREE.Object3D} object
 * @param {THREE.Vector3} target
 */
function getWorldPosition(object, target) {
  return target.setFromMatrixPosition(object.matrixWorld);
}

/**
 * Sets the target to the centroid position between all passed in
 * positions.
 *
 * @param {Array<THREE.Vector3>} positions
 * @param {THREE.Vector3} target
 */
function getCentroid(positions, target) {
  target.set(0, 0, 0);
  var _iterator = _createForOfIteratorHelper(positions),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var position = _step.value;
      target.add(position);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  target.divideScalar(positions.length);
  return target;
}

/**
 * Takes a direction vector and an up vector and sets
 * `target` quaternion to the rotation. Similar to THREE.Matrix4's
 * `lookAt` function, except rather than taking two Vector3 points,
 * we've already calculaeld the direction earlier so skip the first half.
 *
 * @param {THREE.Vector3} direction
 * @param {THREE.Vector3} up
 * @param {THREE.Quaternion} target
 */
function setQuaternionFromDirection(direction, up, target) {
  var x = t1;
  var y = t2;
  var z = t3;
  var m = m1;
  var el = m1.elements;
  z.copy(direction);
  x.crossVectors(up, z);
  if (x.lengthSq() === 0) {
    // parallel
    if (Math.abs(up.z) === 1) {
      z.x += 0.0001;
    } else {
      z.z += 0.0001;
    }
    z.normalize();
    x.crossVectors(up, z);
  }
  x.normalize();
  y.crossVectors(z, x);
  el[0] = x.x;
  el[4] = y.x;
  el[8] = z.x;
  el[1] = x.y;
  el[5] = y.y;
  el[9] = z.y;
  el[2] = x.z;
  el[6] = y.z;
  el[10] = z.z;
  target.setFromRotationMatrix(m);
}

/**
 * Implementation of Unity's Transform.transformPoint, which is similar
 * to three's Vector3.transformDirection, except we want to take scale into account,
 * as we're not transforming a direction. Function taken from BabylonJS.
 *
 * From BabylonJS's `Vector3.transformCoordinates`:
 * Sets the passed vector coordinates with the result of the transformation by the
 * passed matrix of the passed vector. This method computes tranformed coordinates only,
 * not transformed direction vectors (ie. it takes translation in account)
 *
 * @see https://docs.unity3d.com/ScriptReference/Transform.TransformPoint.html
 * @see https://github.com/BabylonJS/Babylon.js/blob/6050288da37623088d5f613ca2d85aef877c5cd5/src/Math/babylon.math.ts#L1936
 * @param {THREE.Vector3} vector
 * @param {THREE.Matrix4} matrix
 * @param {THREE.Vector3} target
 */
function transformPoint(vector, matrix, target) {
  var e = matrix.elements;
  var x = vector.x * e[0] + vector.y * e[4] + vector.z * e[8] + e[12];
  var y = vector.x * e[1] + vector.y * e[5] + vector.z * e[9] + e[13];
  var z = vector.x * e[2] + vector.y * e[6] + vector.z * e[10] + e[14];
  var w = vector.x * e[3] + vector.y * e[7] + vector.z * e[11] + e[15];
  target.set(x / w, y / w, z / w);
}

var Z_AXIS = new Vector3(0, 0, 1);
var DEG2RAD = Math$1.DEG2RAD,
  RAD2DEG = Math$1.RAD2DEG;

/**
 * A class for a constraint.
 */
var IKBallConstraint = /*#__PURE__*/function () {
  /**
   * Pass in an angle value in degrees.
   *
   * @param {number} angle
   */
  function IKBallConstraint(angle) {
    _classCallCheck(this, IKBallConstraint);
    this.angle = angle;
  }

  /**
   * Applies a constraint to passed in IKJoint, updating
   * its direction if necessary. Returns a boolean indicating
   * if the constraint was applied or not.
   *
   * @param {IKJoint} joint
   * @private
   * @return {boolean}
   */
  return _createClass(IKBallConstraint, [{
    key: "_apply",
    value: function _apply(joint) {
      // Get direction of joint and parent in world space
      var direction = new Vector3().copy(joint._getDirection());
      var parentDirection = joint._localToWorldDirection(new Vector3().copy(Z_AXIS)).normalize();

      // Find the current angle between them
      var currentAngle = direction.angleTo(parentDirection) * RAD2DEG;
      if (this.angle / 2 < currentAngle) {
        direction.normalize();
        // Find the correction axis and rotate around that point to the
        // largest allowed angle
        var correctionAxis = new Vector3().crossVectors(parentDirection, direction).normalize();
        parentDirection.applyAxisAngle(correctionAxis, this.angle * DEG2RAD * 0.5);
        joint._setDirection(parentDirection);
        return true;
      }
      return false;
    }
  }]);
}();

var Y_AXIS = new Vector3(0, 1, 0);

/**
 * A class for a joint.
 */
var IKJoint = /*#__PURE__*/function () {
  /**
   * @param {THREE.Bone} bone
   * @param {Object} config
   * @param {Array<IKConstraint>} [config.constraints]
   */
  function IKJoint(bone) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      constraints = _ref.constraints;
    _classCallCheck(this, IKJoint);
    this.constraints = constraints || [];
    this.bone = bone;
    this.distance = 0;
    this._originalDirection = new Vector3();
    this._direction = new Vector3();
    this._worldPosition = new Vector3();
    this._isSubBase = false;
    this._subBasePositions = null;
    this.isIKJoint = true;
    this._updateWorldPosition();
  }

  /**
   * @private
   */
  return _createClass(IKJoint, [{
    key: "_setIsSubBase",
    value: function _setIsSubBase() {
      this._isSubBase = true;
      this._subBasePositions = [];
    }

    /**
     * Consumes the stored sub base positions and apply it as this
     * joint's world position, clearing the sub base positions.
     *
     * @private
     */
  }, {
    key: "_applySubBasePositions",
    value: function _applySubBasePositions() {
      if (this._subBasePositions.length === 0) {
        return;
      }
      getCentroid(this._subBasePositions, this._worldPosition);
      this._subBasePositions.length = 0;
    }

    /**
     * @private
     */
  }, {
    key: "_applyConstraints",
    value: function _applyConstraints() {
      if (!this.constraints) {
        return;
      }
      var constraintApplied = false;
      var _iterator = _createForOfIteratorHelper(this.constraints),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var constraint = _step.value;
          if (constraint && constraint._apply) {
            var applied = constraint._apply(this);
            constraintApplied = constraintApplied || applied;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return constraintApplied;
    }

    /**
     * Set the distance.
     * @private
     * @param {number} distance
     */
  }, {
    key: "_setDistance",
    value: function _setDistance(distance) {
      this.distance = distance;
    }

    /**
     * @private
     */
  }, {
    key: "_getDirection",
    value: function _getDirection() {
      return this._direction;
    }

    /**
     * @private
     */
  }, {
    key: "_setDirection",
    value: function _setDirection(direction) {
      this._direction.copy(direction);
    }

    /**
     * Gets the distance.
     * @private
     * @return {THREE.Vector3}
     */
  }, {
    key: "_getDistance",
    value: function _getDistance() {
      return this.distance;
    }

    /**
     * @private
     */
  }, {
    key: "_updateMatrixWorld",
    value: function _updateMatrixWorld() {
      this.bone.updateMatrixWorld(true);
    }

    /**
     * @private
     * @return {THREE.Vector3}
     */
  }, {
    key: "_getWorldPosition",
    value: function _getWorldPosition() {
      return this._worldPosition;
    }

    /**
     * @private
     */
  }, {
    key: "_getWorldDirection",
    value: function _getWorldDirection(joint) {
      return new Vector3().subVectors(this._getWorldPosition(), joint._getWorldPosition()).normalize();
    }

    /**
     * @private
     */
  }, {
    key: "_updateWorldPosition",
    value: function _updateWorldPosition() {
      getWorldPosition(this.bone, this._worldPosition);
    }

    /**
     * @private
     */
  }, {
    key: "_setWorldPosition",
    value: function _setWorldPosition(position) {
      this._worldPosition.copy(position);
    }

    /**
     * @private
     */
  }, {
    key: "_localToWorldDirection",
    value: function _localToWorldDirection(direction) {
      if (this.bone.parent) {
        var parent = this.bone.parent.matrixWorld;
        direction.transformDirection(parent);
      }
      return direction;
    }

    /**
     * @private
     */
  }, {
    key: "_worldToLocalDirection",
    value: function _worldToLocalDirection(direction) {
      if (this.bone.parent) {
        var inverseParent = new Matrix4().copy(this.bone.parent.matrixWorld).invert();
        direction.transformDirection(inverseParent);
      }
      return direction;
    }

    /**
     * @private
     */
  }, {
    key: "_applyWorldPosition",
    value: function _applyWorldPosition() {
      var direction = new Vector3().copy(this._direction);
      var position = new Vector3().copy(this._getWorldPosition());
      var parent = this.bone.parent;
      if (parent) {
        this._updateMatrixWorld();
        var inverseParent = new Matrix4().copy(this.bone.parent.matrixWorld).invert();
        transformPoint(position, inverseParent, position);
        this.bone.position.copy(position);
        this._updateMatrixWorld();
        this._worldToLocalDirection(direction);
        setQuaternionFromDirection(direction, Y_AXIS, this.bone.quaternion);
      } else {
        this.bone.position.copy(position);
      }

      // Update the world matrix so the next joint can properly transform
      // with this world matrix
      this.bone.updateMatrix();
      this._updateMatrixWorld();
    }

    /**
     * @param {IKJoint|THREE.Vector3}
     * @private
     * @return {THREE.Vector3}
     */
  }, {
    key: "_getWorldDistance",
    value: function _getWorldDistance(joint) {
      return this._worldPosition.distanceTo(joint.isIKJoint ? joint._getWorldPosition() : getWorldPosition(joint, new Vector3()));
    }
  }]);
}();

/**
 * Class representing an IK chain, comprising multiple IKJoints.
 */
var IKChain = /*#__PURE__*/function () {
  /**
   * Create an IKChain.
   */
  function IKChain() {
    _classCallCheck(this, IKChain);
    this.isIKChain = true;
    this.totalLengths = 0;
    this.base = null;
    this.effector = null;
    this.effectorIndex = null;
    this.chains = new Map();

    /* THREE.Vector3 world position of base node */
    this.origin = null;
    this.iterations = 100;
    this.tolerance = 0.01;
    this._depth = -1;
    this._targetPosition = new Vector3();
  }

  /**
   * Add an IKJoint to the end of this chain.
   *
   * @param {IKJoint} joint
   * @param {Object} config
   * @param {THREE.Object3D} [config.target]
   */
  return _createClass(IKChain, [{
    key: "add",
    value: function add(joint) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        target = _ref.target;
      if (this.effector) {
        throw new Error('Cannot add additional joints to a chain with an end effector.');
      }
      if (!joint.isIKJoint) {
        if (joint.isBone) {
          joint = new IKJoint(joint);
        } else {
          throw new Error('Invalid joint in an IKChain. Must be an IKJoint or a THREE.Bone.');
        }
      }
      this.joints = this.joints || [];
      this.joints.push(joint);

      // If this is the first joint, set as base.
      if (this.joints.length === 1) {
        this.base = this.joints[0];
        this.origin = new Vector3().copy(this.base._getWorldPosition());
      }
      // Otherwise, calculate the distance for the previous joint,
      // and update the total length.
      else {
        var previousJoint = this.joints[this.joints.length - 2];
        previousJoint._updateMatrixWorld();
        previousJoint._updateWorldPosition();
        joint._updateWorldPosition();
        var distance = previousJoint._getWorldDistance(joint);
        if (distance === 0) {
          throw new Error('bone with 0 distance between adjacent bone found');
        }
        joint._setDistance(distance);
        joint._updateWorldPosition();
        var direction = previousJoint._getWorldDirection(joint);
        previousJoint._originalDirection = new Vector3().copy(direction);
        joint._originalDirection = new Vector3().copy(direction);
        this.totalLengths += distance;
      }
      if (target) {
        this.effector = joint;
        this.effectorIndex = joint;
        this.target = target;
      }
      return this;
    }

    /**
     * Returns a boolean indicating whether or not this chain has an end effector.
     *
     * @private
     * @return {boolean}
     */
  }, {
    key: "_hasEffector",
    value: function _hasEffector() {
      return !!this.effector;
    }

    /**
     * Returns the distance from the end effector to the target. Returns -1 if
     * this chain does not have an end effector.
     *
     * @private
     * @return {number}
     */
  }, {
    key: "_getDistanceFromTarget",
    value: function _getDistanceFromTarget() {
      return this._hasEffector() ? this.effector._getWorldDistance(this.target) : -1;
    }

    /**
     * Connects another IKChain to this chain. The additional chain's root
     * joint must be a member of this chain.
     *
     * @param {IKChain} chain
     */
  }, {
    key: "connect",
    value: function connect(chain) {
      if (!chain.isIKChain) {
        throw new Error('Invalid connection in an IKChain. Must be an IKChain.');
      }
      if (!chain.base.isIKJoint) {
        throw new Error('Connecting chain does not have a base joint.');
      }
      var index = this.joints.indexOf(chain.base);

      // If we're connecting to the last joint in the chain, ensure we don't
      // already have an effector.
      if (this.target && index === this.joints.length - 1) {
        throw new Error('Cannot append a chain to an end joint in a chain with a target.');
      }
      if (index === -1) {
        throw new Error('Cannot connect chain that does not have a base joint in parent chain.');
      }
      this.joints[index]._setIsSubBase();
      var chains = this.chains.get(index);
      if (!chains) {
        chains = [];
        this.chains.set(index, chains);
      }
      chains.push(chain);
      return this;
    }

    /**
     * Update joint world positions for this chain.
     *
     * @private
     */
  }, {
    key: "_updateJointWorldPositions",
    value: function _updateJointWorldPositions() {
      var _iterator = _createForOfIteratorHelper(this.joints),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var joint = _step.value;
          joint._updateWorldPosition();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    /**
     * Runs the forward pass of the FABRIK algorithm.
     *
     * @private
     */
  }, {
    key: "_forward",
    value: function _forward() {
      // Copy the origin so the forward step can use before `_backward()`
      // modifies it.
      this.origin.copy(this.base._getWorldPosition());

      // Set the effector's position to the target's position.

      if (this.target) {
        this._targetPosition.setFromMatrixPosition(this.target.matrixWorld);
        this.effector._setWorldPosition(this._targetPosition);
      } else if (!this.joints[this.joints.length - 1]._isSubBase) {
        // If this chain doesn't have additional chains or a target,
        // not much to do here.
        return;
      }

      // Apply sub base positions for all joints except the base,
      // as we want to possibly write to the base's sub base positions,
      // not read from it.
      for (var i = 1; i < this.joints.length; i++) {
        var joint = this.joints[i];
        if (joint._isSubBase) {
          joint._applySubBasePositions();
        }
      }
      for (var _i = this.joints.length - 1; _i > 0; _i--) {
        var _joint = this.joints[_i];
        var prevJoint = this.joints[_i - 1];
        var direction = prevJoint._getWorldDirection(_joint);
        var worldPosition = direction.multiplyScalar(_joint.distance).add(_joint._getWorldPosition());

        // If this chain's base is a sub base, set it's position in
        // `_subBaseValues` so that the forward step of the parent chain
        // can calculate the centroid and clear the values.
        // @TODO Could this have an issue if a subchain `x`'s base
        // also had its own subchain `y`, rather than subchain `x`'s
        // parent also being subchain `y`'s parent?
        if (prevJoint === this.base && this.base._isSubBase) {
          this.base._subBasePositions.push(worldPosition);
        } else {
          prevJoint._setWorldPosition(worldPosition);
        }
      }
    }

    /**
     * Runs the backward pass of the FABRIK algorithm.
     *
     * @private
     */
  }, {
    key: "_backward",
    value: function _backward() {
      // If base joint is a sub base, don't reset it's position back
      // to the origin, but leave it where the parent chain left it.
      if (!this.base._isSubBase) {
        this.base._setWorldPosition(this.origin);
      }
      for (var i = 0; i < this.joints.length - 1; i++) {
        var joint = this.joints[i];
        var nextJoint = this.joints[i + 1];
        var jointWorldPosition = joint._getWorldPosition();
        var direction = nextJoint._getWorldDirection(joint);
        joint._setDirection(direction);
        joint._applyConstraints();
        direction.copy(joint._direction);

        // Now apply the world position to the three.js matrices. We need
        // to do this before the next joint iterates so it can generate rotations
        // in local space from its parent's matrixWorld.
        // If this is a chain sub base, let the parent chain apply the world position
        if (!(this.base === joint && joint._isSubBase)) {
          joint._applyWorldPosition();
        }
        nextJoint._setWorldPosition(direction.multiplyScalar(nextJoint.distance).add(jointWorldPosition));

        // Since we don't iterate over the last joint, handle the applying of
        // the world position. If it's also a non-effector, then we must orient
        // it to its parent rotation since otherwise it has nowhere to point to.
        if (i === this.joints.length - 2) {
          if (nextJoint !== this.effector) {
            nextJoint._setDirection(direction);
          }
          nextJoint._applyWorldPosition();
        }
      }
      return this._getDistanceFromTarget();
    }
  }]);
}();

/**
 * Class representing IK structure.
 */
var IK = /*#__PURE__*/function () {
  /**
   * Create an IK structure.
   *
   */
  function IK() {
    _classCallCheck(this, IK);
    this.chains = [];
    this._needsRecalculated = true;
    this.isIK = true;

    // this.iterations = 1;
    // this.tolerance = 0.05;

    /**
     * An array of root chains for this IK system, each containing
     * an array of all subchains, including the root chain, for that
     * root chain, in descending-depth order.
     * @private
     */
    this._orderedChains = null;
  }

  /**
   * Adds an IKChain to the IK system.
   *
   * @param {IKChain} chain
   */
  return _createClass(IK, [{
    key: "add",
    value: function add(chain) {
      if (!chain.isIKChain) {
        throw new Error('Argument is not an IKChain.');
      }
      this.chains.push(chain);
    }

    /**
     * Called if there's been any changes to an IK structure.
     * Called internally. Not sure if this should be supported externally.
     * @private
     */
  }, {
    key: "recalculate",
    value: function recalculate() {
      this._orderedChains = [];
      var _iterator = _createForOfIteratorHelper(this.chains),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var rootChain = _step.value;
          var orderedChains = [];
          this._orderedChains.push(orderedChains);
          var chainsToSave = [rootChain];
          while (chainsToSave.length) {
            var chain = chainsToSave.shift();
            orderedChains.push(chain);
            var _iterator2 = _createForOfIteratorHelper(chain.chains.values()),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var subChains = _step2.value;
                var _iterator3 = _createForOfIteratorHelper(subChains),
                  _step3;
                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var subChain = _step3.value;
                    if (chainsToSave.indexOf(subChain) !== -1) {
                      throw new Error('Recursive chain structure detected.');
                    }
                    chainsToSave.push(subChain);
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    /**
     * Performs the IK solution and updates bones.
     */
  }, {
    key: "solve",
    value: function solve() {
      // If we don't have a depth-sorted array of chains, generate it.
      // This is from the first `update()` call after creating.
      if (!this._orderedChains) {
        this.recalculate();
      }
      var _iterator4 = _createForOfIteratorHelper(this._orderedChains),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var subChains = _step4.value;
          // Hardcode to one for now
          var iterations = 1; // this.iterations;

          while (iterations > 0) {
            for (var i = subChains.length - 1; i >= 0; i--) {
              subChains[i]._updateJointWorldPositions();
            }

            // Run the chain's forward step starting with the deepest chains.
            for (var _i = subChains.length - 1; _i >= 0; _i--) {
              subChains[_i]._forward();
            }

            // Run the chain's backward step starting with the root chain.
            var withinTolerance = true;
            for (var _i2 = 0; _i2 < subChains.length; _i2++) {
              var distanceFromTarget = subChains[_i2]._backward();
              if (distanceFromTarget > this.tolerance) {
                withinTolerance = false;
              }
            }
            if (withinTolerance) {
              break;
            }
            iterations--;

            // Get the root chain's base and randomize the rotation, maybe
            // we'll get a better change at reaching our goal
            // @TODO
            if (iterations > 0) {
              // subChains[subChains.length - 1]._randomizeRootRotation();
            }
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }

    /**
     * Returns the root bone of this structure. Currently
     * only returns the first root chain's bone.
     *
     * @return {THREE.Bone}
     */
  }, {
    key: "getRootBone",
    value: function getRootBone() {
      return this.chains[0].base.bone;
    }
  }]);
}();

/**
 * Mesh for representing an IKJoint.
 * @private
 * @extends {THREE.Object3d}
 */
var BoneHelper = /*#__PURE__*/function (_Object3D) {
  /**
   * @param {number} height
   * @param {number?} boneSize
   * @param {number?} axesSize
   */
  function BoneHelper(height, boneSize, axesSize) {
    var _this;
    _classCallCheck(this, BoneHelper);
    _this = _callSuper(this, BoneHelper);

    // If our bone has 0 height (like an end effector),
    // use a dummy Object3D instead, otherwise the ConeBufferGeometry
    // will fall back to its default and not use 0 height.
    if (height !== 0) {
      var geo = new ConeBufferGeometry(boneSize, height, 4);
      geo.applyMatrix4(new Matrix4().makeRotationAxis(new Vector3(1, 0, 0), Math.PI / 2));
      _this.boneMesh = new Mesh(geo, new MeshBasicMaterial({
        color: 0xff0000,
        wireframe: true,
        depthTest: false,
        depthWrite: false
      }));
    } else {
      _this.boneMesh = new Object3D();
    }

    // Offset the bone so that its rotation point is at the base of the bone
    _this.boneMesh.position.z = height / 2;
    _this.add(_this.boneMesh);
    _this.axesHelper = new AxesHelper(axesSize);
    _this.add(_this.axesHelper);
    return _this;
  }
  _inherits(BoneHelper, _Object3D);
  return _createClass(BoneHelper);
}(Object3D);
/**
 * Class for visualizing an IK system.
 * @extends {THREE.Object3d}
 */
var IKHelper = /*#__PURE__*/function (_Object3D2) {
  /**
   * Creates a visualization for an IK.
   *
   * @param {IK} ik
   * @param {Object} config
   * @param {THREE.Color} [config.color]
   * @param {boolean} [config.showBones]
   * @param {boolean} [config.showAxes]
   * @param {boolean} [config.wireframe]
   * @param {number} [config.axesSize]
   * @param {number} [config.boneSize]
   */
  function IKHelper(ik) {
    var _this2;
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      color = _ref.color,
      showBones = _ref.showBones,
      boneSize = _ref.boneSize,
      showAxes = _ref.showAxes,
      axesSize = _ref.axesSize,
      wireframe = _ref.wireframe;
    _classCallCheck(this, IKHelper);
    _this2 = _callSuper(this, IKHelper);
    boneSize = boneSize || 0.1;
    axesSize = axesSize || 0.2;
    if (!ik.isIK) {
      throw new Error('IKHelper must receive an IK instance.');
    }
    _this2.ik = ik;
    _this2._meshes = new Map();
    var _iterator = _createForOfIteratorHelper(_this2.ik.chains),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var rootChain = _step.value;
        var chainsToMeshify = [rootChain];
        while (chainsToMeshify.length) {
          var chain = chainsToMeshify.shift();
          for (var i = 0; i < chain.joints.length; i++) {
            var joint = chain.joints[i];
            var nextJoint = chain.joints[i + 1];
            var distance = nextJoint ? nextJoint.distance : 0;

            // If a sub base, don't make another bone
            if (chain.base === joint && chain !== rootChain) {
              continue;
            }
            var mesh = new BoneHelper(distance, boneSize, axesSize);
            mesh.matrixAutoUpdate = false;
            _this2._meshes.set(joint, mesh);
            _this2.add(mesh);
          }
          var _iterator2 = _createForOfIteratorHelper(chain.chains.values()),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var subChains = _step2.value;
              var _iterator3 = _createForOfIteratorHelper(subChains),
                _step3;
              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var subChain = _step3.value;
                  chainsToMeshify.push(subChain);
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      }

      /**
       * Whether this IKHelper's bones are visible or not.
       *
       * @name IKHelper#showBones
       * @type boolean
       * @default true
       */
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    _this2.showBones = showBones !== undefined ? showBones : true;

    /**
     * Whether this IKHelper's axes are visible or not.
     *
     * @name IKHelper#showAxes
     * @type boolean
     * @default true
     */
    _this2.showAxes = showAxes !== undefined ? showAxes : true;

    /**
     * Whether this IKHelper should be rendered as wireframes or not.
     *
     * @name IKHelper#wireframe
     * @type boolean
     * @default true
     */
    _this2.wireframe = wireframe !== undefined ? wireframe : true;

    /**
     * The color of this IKHelper's bones.
     *
     * @name IKHelper#color
     * @type THREE.Color
     * @default new THREE.Color(0xff0077)
     */
    _this2.color = color || new Color(0xff0077);
    return _this2;
  }
  _inherits(IKHelper, _Object3D2);
  return _createClass(IKHelper, [{
    key: "showBones",
    get: function get() {
      return this._showBones;
    },
    set: function set(showBones) {
      if (showBones === this._showBones) {
        return;
      }
      var _iterator4 = _createForOfIteratorHelper(this._meshes),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _step4$value = _slicedToArray(_step4.value, 2),
            joint = _step4$value[0],
            mesh = _step4$value[1];
          if (showBones) {
            mesh.add(mesh.boneMesh);
          } else {
            mesh.remove(mesh.boneMesh);
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      this._showBones = showBones;
    }
  }, {
    key: "showAxes",
    get: function get() {
      return this._showAxes;
    },
    set: function set(showAxes) {
      if (showAxes === this._showAxes) {
        return;
      }
      var _iterator5 = _createForOfIteratorHelper(this._meshes),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var _step5$value = _slicedToArray(_step5.value, 2),
            joint = _step5$value[0],
            mesh = _step5$value[1];
          if (showAxes) {
            mesh.add(mesh.axesHelper);
          } else {
            mesh.remove(mesh.axesHelper);
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      this._showAxes = showAxes;
    }
  }, {
    key: "wireframe",
    get: function get() {
      return this._wireframe;
    },
    set: function set(wireframe) {
      if (wireframe === this._wireframe) {
        return;
      }
      var _iterator6 = _createForOfIteratorHelper(this._meshes),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var _step6$value = _slicedToArray(_step6.value, 2),
            joint = _step6$value[0],
            mesh = _step6$value[1];
          if (mesh.boneMesh.material) {
            mesh.boneMesh.material.wireframe = wireframe;
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      this._wireframe = wireframe;
    }
  }, {
    key: "color",
    get: function get() {
      return this._color;
    },
    set: function set(color) {
      if (this._color && this._color.equals(color)) {
        return;
      }
      color = color && color.isColor ? color : new Color(color);
      var _iterator7 = _createForOfIteratorHelper(this._meshes),
        _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var _step7$value = _slicedToArray(_step7.value, 2),
            joint = _step7$value[0],
            mesh = _step7$value[1];
          if (mesh.boneMesh.material) {
            mesh.boneMesh.material.color = color;
          }
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
      this._color = color;
    }
  }, {
    key: "updateMatrixWorld",
    value: function updateMatrixWorld(force) {
      var _iterator8 = _createForOfIteratorHelper(this._meshes),
        _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var _step8$value = _slicedToArray(_step8.value, 2),
            joint = _step8$value[0],
            mesh = _step8$value[1];
          mesh.matrix.copy(joint.bone.matrixWorld);
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
      _superPropGet(IKHelper, "updateMatrixWorld", this)([force]);
    }
  }]);
}(Object3D);

// If this is being included via script tag and using THREE
// globals, attach our exports to THREE.
if (typeof window !== 'undefined' && _typeof(window.THREE) === 'object') {
  window.THREE.IK = IK;
  window.THREE.IKChain = IKChain;
  window.THREE.IKJoint = IKJoint;
  window.THREE.IKBallConstraint = IKBallConstraint;
  window.THREE.IKHelper = IKHelper;
}

export { IK, IKBallConstraint, IKChain, IKHelper, IKJoint };

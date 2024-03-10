-- @see testArrCanGet
local function testArrCanGetExecution(list, key, default, expectedOutput)
    lu.assertEquals(__.arr:get(list, key, default), expectedOutput)
end

--[[
@covers Arr:get()
]]
function testArrCanGet()
    testArrCanGetExecution({}, 'test', nil, nil)
    testArrCanGetExecution({}, 'test', 'default', 'default')

    local listWithSingleObject = {}
    listWithSingleObject['test'] = 'test'
    testArrCanGetExecution(listWithSingleObject, 'test', nil, 'test')

    local listWithNestedKeys = {}
    listWithNestedKeys['test-a'] = {}
    listWithNestedKeys['test-a']['test-b'] = {}
    listWithNestedKeys['test-a']['test-b']['test-c'] = 'test'
    testArrCanGetExecution(listWithNestedKeys, 'test-a.test-b.test-c', nil, 'test')
end

--[[
@covers Arr
]]
function testArrCanGetInstance()
    local arr = __.arr

    lu.assertNotIsNil(arr)
end

--[[
@covers Arr:implode()
]]
function testArrCanImplode()
    local arr = __.arr

    local delimiter = ','
    local list = {'a', 'b', 'c'}

    local result = arr:implode(delimiter, list)

    lu.assertEquals(result, 'a,b,c')
end

--[[
@covers Arr:implode()
]]
function testArrCanImplodeWithNonList()
    local arr = __.arr

    local text = 'test'
    local result = arr:implode(',', text)

    lu.assertEquals(result, text)
end

--[[
@covers Arr:set()
]]
function testArrCanSet()
    local arr = __.arr

    local list = {}
    list['a'] = {}
    list['a']['b'] = 'test-initial'

    -- sanity checks to make sure the list is consistent
    lu.assertEquals(arr:get(list, 'a.b'), 'test-initial')
    lu.assertIsNil(arr:get(list, 'a.c'))
    lu.assertIsNil(arr:get(list, 'x.y.z'))

    -- sets a couple of properties
    arr:set(list, 'a.c', 'test-with-set')
    arr:set(list, 'x.y.z', 'test-with-three-levels')

    -- checks if the property 
    lu.assertEquals(arr:get(list, 'a.c'), 'test-with-set')
    lu.assertEquals(arr:get(list, 'x.y.z'), 'test-with-three-levels')
    lu.assertEquals(arr:get(list, 'a.b'), 'test-initial')
end

--[[
@covers Arr:isArray()
]]
function testArrIsArray()
    local arr = __.arr

    lu.assertIsTrue(arr:isArray({'a', 'b', 'c'}))

    lu.assertIsFalse(arr:isArray(1))
    lu.assertIsFalse(arr:isArray('a'))
    lu.assertIsFalse(arr:isArray(arr))

    local tableWithStringKeys = {}
    arr:set(tableWithStringKeys, 'a.b.c', 'test')
    lu.assertIsFalse(arr:isArray(tableWithStringKeys))
end
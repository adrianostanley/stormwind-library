lu = require('luaunit')

-- World of Warcraft Mocks
-- @TODO: Move this to a separate file <2024.03.26>
CreateFrame = function ()
    local mockFrame = {
        ['events'] = {},
        ['scripts'] = {},
    }
    mockFrame.RegisterEvent = function (self, event) table.insert(self.events, event) end
    mockFrame.SetScript = function (self, script, callback) self.scripts[script] = callback end
    return mockFrame
end
-- End

dofile('./dist/stormwind-library.lua')
StormwindLibrary = StormwindLibrary_v0_0_7
function newLibrary() return StormwindLibrary.new({
    name = 'TestSuite'
}) end

--[[
This allows the library to be reloaded between tests, which is useful when
mocking it on tests could affect the results of other tests.

@NOTE: LuaUnit provides a setUp() method that could be used to reset the
       library before each test, but it wasn't working properly.

@TODO: Use LuaUnit's setUp() method to reset the library before each test <2024.03.27>
]]
function runTests(file)
    __ = newLibrary()
    dofile(file)
end

runTests('./tests/Commands/CommandsTest.lua')
runTests('./tests/Commands/CommandsHandlerTest.lua')

runTests('./tests/Core/AddonPropertiesTest.lua')
runTests('./tests/Core/FactoryTest.lua')
runTests('./tests/Core/OutputTest.lua')

runTests('./tests/Facades/EventsTest.lua')
runTests('./tests/Facades/EventHandlers/PlayerLoginEventHandlerTest.lua')
runTests('./tests/Facades/EventHandlers/TargetEventHandlerTest.lua')
runTests('./tests/Facades/TargetTest.lua')

runTests('./tests/Models/MacroTest.lua')
runTests('./tests/Models/RaidMarkerTest.lua')

runTests('./tests/Support/ArrTest.lua')
runTests('./tests/Support/StrTest.lua')

lu.ORDER_ACTUAL_EXPECTED=false

os.exit(lu.LuaUnit.run())